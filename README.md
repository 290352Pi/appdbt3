# BigBikeTH – Next.js Prototype

ต้นแบบเว็บตลาดซื้อขายบิ๊กไบค์ สร้างด้วย Next.js App Router + React + TypeScript

## เริ่มต้นใช้งาน

ต้องติดตั้ง Node.js LTS ก่อน จากนั้นเปิด Terminal ในโฟลเดอร์โปรเจกต์แล้วรัน:

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## Deploy ไป Vercel

1. แตกไฟล์ ZIP
2. อัปโหลดโฟลเดอร์โปรเจกต์ขึ้น GitHub repository
3. เข้า https://vercel.com แล้วเลือก Add New → Project
4. Import GitHub repository
5. Framework Preset เลือก Next.js (Vercel จะตรวจจับให้อัตโนมัติ)
6. กด Deploy

## หมายเหตุ

- เป็น Front-end prototype ข้อมูลรถและบัญชีเป็นข้อมูลตัวอย่าง
- รายการโปรด, ตัวกรอง, ค้นหา, หน้ารายละเอียด, ฟอร์มลงประกาศ และแชทตัวอย่างทำงานภายในหน้าเว็บ
- ยังไม่มีฐานข้อมูล, ระบบสมัครสมาชิกจริง, อัปโหลดรูปขึ้นเซิร์ฟเวอร์ หรือระบบแชทเรียลไทม์
- รูปรถใช้ภาพตัวอย่างจาก Unsplash ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อแสดงภาพ
- สามารถเปลี่ยนข้อมูลรถได้ที่ `app/page.tsx`
