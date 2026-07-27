import { WHATSAPP_NUMBER } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20MALBA_REE`}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}
