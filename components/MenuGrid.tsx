"use client";

import { useMemo, useState } from "react";
import MalbaCard from "./MalbaCard";
import { MALBAS } from "@/lib/data";

const FILTERS = ["all", "signature", "premium"] as const;

export default function MenuGrid() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");

  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return MALBAS.filter(
      (m) =>
        (filter === "all" || m.tag === filter) &&
        m.name.toLowerCase().includes(q)
    );
  }, [query, filter]);

  return (
    <>
      <div className="tools">
        <div className="search">
          <input
            type="text"
            id="menuSearch"
            placeholder="Search malbas…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-3" style={{ marginTop: 40 }}>
        {visible.map((m) => (
          <MalbaCard key={m.slug} malba={m} />
        ))}
      </div>

      {visible.length === 0 && (
        <p
          id="menuEmpty"
          className="text-center text-muted"
          style={{ padding: "40px 0" }}
        >
          No malbas match that search.
        </p>
      )}
    </>
  );
}
