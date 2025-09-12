// src/mocks/files.ts
export type FileRow = {
    name: string;
    size: string;
    updatedAt: string;
  };
  
  export function generateDummyFiles(total: number): FileRow[] {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return Array.from({ length: total }, (_, i) => {
      const idx = i + 1;
      const kb = 30 + (idx % 90); // 30~119KB
      const d = new Date(2024, (idx % 12), (idx % 28) + 1, 10, 30, 0);
      return {
        name: `Panel_${idx}.xml`,
        size: `${kb} KB`,
        updatedAt: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:00`,
      };
    });
  }
  