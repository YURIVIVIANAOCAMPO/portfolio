"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3ChartProps {
  data: number[];
  labels?: string[];
  color?: string;
}

export default function D3Chart({ data, labels, color = "var(--accent)" }: D3ChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const updateChart = () => {
      const width = containerRef.current?.clientWidth || 100;
      const height = containerRef.current?.clientHeight || 40;
      const margin = { top: 15, right: 15, bottom: 25, left: 15 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      svg.attr("width", width).attr("height", height);

      const x = d3.scaleBand()
        .domain(data.map((_, i) => i.toString()))
        .range([0, innerWidth])
        .padding(0.3);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data) || 100])
        .range([innerHeight, 0]);

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Bars with interaction
      g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (_, i) => x(i.toString()) || 0)
        .attr("y", d => y(d))
        .attr("width", x.bandwidth())
        .attr("height", d => innerHeight - y(d))
        .attr("fill", color)
        .attr("rx", 3)
        .attr("opacity", 0.6)
        .style("cursor", "pointer")
        .on("mouseover", (event: any, d: number) => {
          const currentIdx = data.indexOf(d);
          const label = labels ? labels[currentIdx] : "";
          
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("opacity", 1)
            .attr("fill", "#ff5e3a"); // Solid orange
            
          if (tooltipRef.current) {
            tooltipRef.current.style.opacity = "1";
            tooltipRef.current.innerHTML = `<span style="display:block">${d} Commits</span><span style="font-size:8px;opacity:0.8">${label || ""}</span>`;
            tooltipRef.current.style.left = `${event.offsetX}px`;
            tooltipRef.current.style.top = `${event.offsetY - 35}px`;
          }
        })
        .on("mouseout", (event: any) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(200)
            .attr("opacity", 0.6)
            .attr("fill", color);
            
          if (tooltipRef.current) {
            tooltipRef.current.style.opacity = "0";
          }
        })
        .transition()
        .duration(1000)
        .attr("opacity", 0.6);

      // Line trend
      const line = d3.line<number>()
        .x((_, i) => (x(i.toString()) || 0) + x.bandwidth() / 2)
        .y(d => y(d))
        .curve(d3.curveBasis);

      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("opacity", 0.4)
        .attr("stroke-dasharray", function() { return (this as SVGPathElement).getTotalLength(); })
        .attr("stroke-dashoffset", function() { return (this as SVGPathElement).getTotalLength(); })
        .transition()
        .duration(1500)
        .attr("stroke-dashoffset", 0);

      // Axis labels if they exist
      if (labels) {
        g.selectAll(".x-label")
          .data(labels)
          .enter()
          .append("text")
          .attr("class", "x-label")
          .attr("x", (_, i) => (x(i.toString()) || 0) + x.bandwidth() / 2)
          .attr("y", innerHeight + 18)
          .attr("text-anchor", "middle")
          .attr("fill", "var(--accent)")
          .style("font-size", "8px")
          .style("font-weight", "400")
          .style("font-family", "var(--font-heading)")
          .text(d => d);
      }
    };

    const resizeObserver = new ResizeObserver(() => updateChart());
    resizeObserver.observe(containerRef.current);
    updateChart();

    return () => resizeObserver.disconnect();
  }, [data, labels, color]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '80px', position: 'relative' }}>
      <div 
        ref={tooltipRef} 
        style={{ 
          position: 'absolute', 
          background: 'rgba(15, 15, 15, 0.8)', 
          border: '1px solid var(--accent)',
          color: 'var(--accent)', 
          padding: '4px 8px', 
          borderRadius: '6px', 
          fontSize: '10px', 
          fontWeight: '400',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          zIndex: 10,
          backdropFilter: 'blur(4px)',
          textAlign: 'center'
        }}
      />
      <svg ref={svgRef} style={{ overflow: 'visible', display: 'block' }} />
    </div>
  );
}
