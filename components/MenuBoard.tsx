"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { MENU_CATEGORIES, ADD_ONS } from "@/lib/data";

const TABS = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "drinks", label: "Drinks" },
] as const;

const BOARDS = [
  { key: "food" as const, kicker: "Every Bite Smiles", title: "Food Menu" },
  { key: "drinks" as const, kicker: "Every Sip Matters", title: "Malbaree Signature Menu" },
];

export default function MenuBoard() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_CATEGORIES.map((cat) => {
      if (!q) return cat;
      const items = cat.items.filter((i) => i.name.toLowerCase().includes(q));
      const titleMatches = cat.title.toLowerCase().includes(q);
      if (titleMatches) return cat;
      if (items.length === 0) return null;
      return { ...cat, items };
    }).filter(Boolean) as typeof MENU_CATEGORIES;
  }, [query]);

  const anyResults = filtered.length > 0;

  return (
    <>
      <div className="board-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`board-tab${tab === t.key ? " active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="menu-search-wrap" style={{ padding: 0 }}>
        <input
          type="text"
          placeholder="Search the menu…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!anyResults && <p className="menu-empty">No menu items match that search.</p>}

      {BOARDS.map((board) => {
        if (tab !== "all" && tab !== board.key) return null;
        const cats = filtered.filter((c) => c.board === board.key);
        if (cats.length === 0) return null;

        return (
          <section className={`menu-panel theme-${board.key}`} key={board.key}>
            <div className="menu-panel-head">
              <span className="kicker">{board.kicker}</span>
              <h2>{board.title}</h2>
              <div className="rule" />
            </div>

            <div className="menu-categories">
              {cats.map((cat, i) => (
                <Reveal
                  as="div"
                  className={`menu-category${i % 2 === 1 ? " flip" : ""}`}
                  key={cat.slug}
                >
                  <div className="menu-category-img">
                    <div className="ring" />
                    <div className="frame">
                      <Image
                        src={cat.image}
                        alt={`${cat.title} — MALBA_REE Hyderabad menu`}
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="menu-category-body">
                    <h3>{cat.title}</h3>
                    <div className="menu-items">
                      {cat.items.map((it) => (
                        <div className="menu-item-row" key={it.name}>
                          <span className="name">{it.name}</span>
                          <span className="dots" />
                          <span className="price">{it.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {board.key === "food" && !query && (
              <div className="addon-strip">
                <span className="label">Add on</span>
                {ADD_ONS.map((a) => (
                  <span className="addon-chip" key={a.name}>
                    {a.name}
                    <span className="price">{a.price}</span>
                  </span>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
