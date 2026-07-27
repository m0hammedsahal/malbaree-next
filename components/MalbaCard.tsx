"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useToast } from "./ToastProvider";
import type { Malba } from "@/lib/data";

export default function MalbaCard({ malba }: { malba: Malba }) {
  const { showToast } = useToast();

  return (
    <Reveal as="div" className="malba-card">
      <div className="malba-img">
        {malba.badge && <span className="badge">{malba.badge}</span>}
        <div className="sunburst" />
        <div className="malba-emoji">
          <Image src={malba.image} alt={malba.name} width={260} height={220} />
        </div>
      </div>
      <div className="malba-body">
        <h3 className={malba.color}>{malba.name}</h3>
        <p>{malba.description}</p>
        <div className="malba-foot">
          <span className={`price${malba.color === "red" ? " red" : ""}`}>
            {malba.price}
          </span>
          <button
            className="add-btn"
            onClick={() => showToast(`${malba.name} added to cart`)}
          >
            +
          </button>
        </div>
      </div>
    </Reveal>
  );
}
