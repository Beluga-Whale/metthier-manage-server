# Task Management API (Node.js / Express / Prisma)

โปรเจกต์นี้คือ Backend REST API สำหรับระบบจัดการ Tasks พัฒนาด้วย Node.js และ Express โดยใช้ Clean Architecture, TypeScript, และ Prisma ORM ในการเชื่อมต่อกับ PostgreSQL

---

### ✨ คุณสมบัติหลัก (Features)

- **CRUD Operations:** จัดการ Tasks ครบถ้วน (Create, Read, Update, Delete)
- **Soft Delete:** การลบ Task จะเป็นการตั้งค่า `deletedAt` โดยไม่ลบออกจากฐานข้อมูล
- **Filtering:** สามารถกรอง Tasks ตามสถานะ (`status`) ได้
- **Clean Architecture:** แบ่ง Layer ชัดเจน (Controller, Service, Repository)

---

### 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma

---

### ⚙️ การตั้งค่าเริ่มต้น (Setup)

#### 1. ข้อกำหนดเบื้องต้น (Prerequisites)

- **Node.js:** v18+
- **PostgreSQL:** Database Server

#### 2. การติดตั้ง (Installation)

```bash
# 1. Clone Project และเข้าโฟลเดอร์ Backend
git clone [YOUR_REPO_URL]
cd [backend-folder-name]

# 2. ติดตั้ง Dependencies
npm install
```

#### 3. .env (Backend)

# 💡 DATABASE: ตั้งค่าการเชื่อมต่อ PostgreSQL

DATABASE_URL="postgresql://postgres:230641@localhost:5432/metthier_db?schema=public"

# 💡 SERVER: ตั้งค่า Port สำหรับ Express Server

PORT=8000

#### 4. การเตรียมฐานข้อมูล (Database Setup)

รันคำสั่ง Migration เพื่อสร้างตาราง Task ใน Database:

```bash
npx prisma migrate dev --name init_task_model
```

#### 5. การเตรียมฐานข้อมูล (Database Setup)

```bash
npm run dev
```

#### 5. API Endpoints

```bash
GET /tasks  //ดึง Tasks ทั้งหมด (รองรับ Query: ?status=TO_DO)
GET /tasks/:id //ดึง Task ตาม ID
POST /tasks //สร้าง Task ใหม่
PUT /tasks/:id //อัปเดต Task (เช่น เปลี่ยน status)
DELETE /tasks/:id //ลบ Task แบบ Soft Delete
```
