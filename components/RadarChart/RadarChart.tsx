"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface RadarChartProps {
  data: { axis: string, value: number }[];
  size?: number;
}

export default function RadarChart({ data }: RadarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const updateChart = () => {
      const width = containerRef.current?.clientWidth || 200;
      const height = width * 0.8; // Maintain aspect ratio
      const margin = 40;
      const radius = (Math.min(width, height) / 2) - margin;
      const angleSlice = (Math.PI * 2) / data.length;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      svg.attr("viewBox", `0 0 ${width} ${height}`)
         .attr("width", "100%")
         .attr("height", "auto");

      const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      // Draw the background circles
      const levels = 4;
      for (let j = 0; j < levels; j++) {
        const levelRadius = radius * ((j + 1) / levels);
        g.append("circle")
          .attr("r", levelRadius)
          .attr("fill", "none")
          .attr("stroke", "rgba(255, 255, 255, 0.05)")
          .attr("stroke-width", 1);
      }

      // Draw the axes
      const axes = g.selectAll(".axis")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "axis");

      axes.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("stroke", "rgba(255, 255, 255, 0.1)")
        .attr("stroke-width", 1);

      // Add labels to axes
      axes.append("text")
        .attr("class", "label")
        .attr("x", (d, i) => (radius + 28) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y", (d, i) => (radius + 28) * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("text-anchor", (d, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          if (Math.abs(Math.cos(angle)) < 0.1) return "middle";
          return Math.cos(angle) > 0 ? "start" : "end";
        })
        .attr("dy", "0.35em")
        .attr("fill", "rgba(255, 255, 255, 0.4)")
        .style("font-size", "9px")
        .style("font-weight", "400")
        .text(d => d.axis);

      // Radar line generator
      const radarLine = d3.lineRadial<{ axis: string, value: number }>()
        .radius(d => (d.value / 100) * radius)
        .angle((d, i) => i * angleSlice)
        .curve(d3.curveLinearClosed);

      // Draw the radar area
      g.append("path")
        .datum(data)
        .attr("d", radarLine)
        .attr("fill", "rgba(255, 126, 32, 0.25)")
        .attr("stroke", "var(--accent)")
        .attr("stroke-width", 2)
        .style("filter", "drop-shadow(0 0 10px rgba(255, 126, 32, 0.4))")
        .attr("opacity", 0)
        .transition()
        .duration(1000)
        .attr("opacity", 1);

      // Add points and value labels
      const points = g.selectAll(".radarPoint")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "radarPoint");

      points.append("circle")
        .attr("r", 3.5)
        .attr("cx", (d, i) => (d.value / 100) * radius * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("cy", (d, i) => (d.value / 100) * radius * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("fill", "var(--accent)")
        .attr("opacity", 0)
        .transition()
        .duration(1000)
        .attr("opacity", 1);

      points.append("text")
        .attr("x", (d, i) => ((d.value / 100) * radius) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y", (d, i) => ((d.value / 100) * radius) * Math.sin(angleSlice * i - Math.PI / 2) - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .style("font-size", "9px")
        .style("font-weight", "300")
        .text(d => `${d.value}%`)
        .attr("opacity", 0)
        .transition()
        .duration(1000)
        .delay(500)
        .attr("opacity", 1);
    };

    const resizeObserver = new ResizeObserver(() => updateChart());
    resizeObserver.observe(containerRef.current);
    updateChart();

    return () => resizeObserver.disconnect();
  }, [data]);

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '240px', margin: '0 auto', minHeight: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg ref={svgRef} style={{ overflow: 'visible' }} />
    </div>
  );
}
