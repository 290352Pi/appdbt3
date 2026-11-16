"use client";

import { useMemo, useState } from "react";
import {
  Search, SlidersHorizontal, Bell, Heart, MapPin, Gauge, ChevronRight,
  Home, Store, Plus, MessageCircle, ChartNoAxesColumn, ShieldCheck,
  Grid2X2, Bike, X, Camera, Send, UserRound, ArrowLeft, CheckCircle2
} from "lucide-react";

type BikeItem = {
  id: number; name: string; brand: string; category: string; price: number;
  km: string; location: string; image: string; year: string; cc: string;
  color: string; description: string;
};

const bikes: BikeItem[] = [
  { id: 1, name: "Yamaha R15", brand: "Yamaha", category: "Sport", price: 79000, km: "12,xxx", location: "กรุงเทพมหานคร", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85", year: "2022", cc: "155 cc", color: "ดำ", description: "รถสปอร์ตสภาพดี ดูแลตามระยะ เอกสารพร้อมโอน เหมาะสำหรับผู้ที่กำลังมองหารถใช้งานและขับขี่สนุก" },
  { id: 2, name: "Kawasaki Ninja ZX-6R", brand: "Kawasaki", category: "Sport", price: 299000, km: "8,xxx", location: "ชลบุรี", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85", year: "2021", cc: "636 cc", color: "แดง", description: "บิ๊กไบค์สปอร์ต  supersport เครื่องยนต์ 4 สูบ พร้อมใช้งาน นัดดูรถได้" },
  { id: 3, name: "Honda CBR650R", brand: "Honda", category: "Sport", price: 255000, km: "15,xxx", location: "นนทบุรี", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=85", year: "2020", cc: "650 cc", color: "น้ำเงิน", description: "รถสภาพสวย เครื่องยนต์เดินเรียบ มีประวัติการดูแล พร้อมให้ทดลองชม" },
  { id: 4, name: "Ducati Panigale V4", brand: "Ducati", category: "Sport", price: 1199000, km: "5,xxx", location: "ชลบุรี", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=85", year: "2022", cc: "1103 cc", color: "ดำ", description: "ซูเปอร์ไบค์ระดับพรีเมียม สภาพสวย อุปกรณ์ครบ ติดต่อสอบถามรายละเอียดเพิ่มเติม" },
  { id: 5, name: "Kawasaki Z900", brand: "Kawasaki", category: "Naked", price: 285000, km: "9,xxx", location: "เชียงใหม่", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85", year: "2021", cc: "948 cc", color: "ดำ", description: "Naked bike ขับขี่คล่องตัว เหมาะกับทั้งในเมืองและเดินทางไกล" },
  { id: 6, name: "BMW S 1000 RR", brand: "BMW", category: "Sport", price: 899000, km: "6,xxx", location: "กรุงเทพมหานคร", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=85", year: "2021", cc: "999 cc", color: "ขาว", description: "ซูเปอร์ไบค์สมรรถนะสูง เอกสารครบ พร้อมนัดหมายตรวจสภาพ" },
];

const money = (n: number) => "฿ " + n.toLocaleString("en-US");
const categories = [
  { name: "สปอร์ตไบค์", value: "Sport", emoji: "🏍️" },
  { name: "เน็กเก็ต", value: "Naked", emoji: "🏍️" },
  { name: "ทัวร์ริ่ง", value: "Touring", emoji: "🛣️" },
  { name: "แอดเวนเจอร์", value: "Adventure", emoji: "⛰️" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selected, setSelected] = useState<BikeItem | null>(null);
  const [showSell, setShowSell] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState("ทั้งหมด");
  const [toast, setToast] = useState("");
  const [messages, setMessages] = useState<string[]>(["สวัสดีครับ สนใจสอบถามรถคันไหนอยู่ครับ?"]);
  const [chatText, setChatText] = useState("");
  const [sellName, setSellName] = useState("");
  const [sellPrice, setSellPrice] = useState("");

  const visibleBikes = useMemo(() => bikes.filter(b => {
    const matchText = `${b.name} ${b.brand}`.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "All" || b.category === category;
    const matchPrice = maxPrice === "ทั้งหมด" || b.price <= Number(maxPrice);
    const matchFav = activeTab !== "favorites" || favorites.includes(b.id);
    return matchText && matchCategory && matchPrice && matchFav;
  }), [query, category, maxPrice, activeTab, favorites]);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }
  function toggleFavorite(id: number) {
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  return (
    <main className="app-shell">
      <div className="phone-status"><span>9:41</span><span className="status-icons">▮▮▮　◉　▰</span></div>
      <header className="topbar">
        <div className="brand-mark"><Bike size={48} strokeWidth={2.5}/></div>
        <div className="brand-copy"><div>BigBike<span>TH</span></div><small>Buy · Sell · Ride</small></div>
        <button className="icon-btn notification" aria-label="การแจ้งเตือน" onClick={() => notify("ไม่มีการแจ้งเตือนใหม่")}><Bell/><i>3</i></button>
        <button className="avatar" aria-label="โปรไฟล์" onClick={() => setActiveTab("profile")}>🏍️</button>
      </header>

      {activeTab === "home" || activeTab === "favorites" ? (
        <>
          <section className="search-row">
            <div className="search-box"><Search size={23}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="ค้นหาบิ๊กไบค์ รุ่น, ยี่ห้อ หรือคำสำคัญ..."/></div>
            <button className="filter-btn" onClick={() => setShowFilters(true)} aria-label="ตัวกรอง"><SlidersHorizontal/></button>
          </section>

          {activeTab === "home" && (
            <>
              <section className="hero">
                <div className="hero-overlay"/>
                <div className="hero-content">
                  <span className="eyebrow">BIGBIKE MARKETPLACE</span>
                  <h1>บิ๊กไบค์คันใหม่<br/><em>รอคุณอยู่!</em></h1>
                  <p>ซื้อขายง่าย ปลอดภัย<br/>กับ BigBikeTH</p>
                  <button className="primary-btn" onClick={() => document.getElementById("recommended")?.scrollIntoView({ behavior: "smooth" })}>ดูเพิ่มเติม <ChevronRight size={19}/></button>
                </div>
                <div className="hero-bike">🏍️</div>
                <div className="hero-dots"><b/><i/><i/><i/></div>
                <div className="hero-tag">R SERIES <small>YAMAHA</small></div>
              </section>

              <section className="category-grid">
                {categories.map(c => <button className={`category-card ${category === c.value ? "active" : ""}`} key={c.value} onClick={() => setCategory(category === c.value ? "All" : c.value)}><span>{c.emoji}</span><b>{c.name}</b></button>)}
                <button className="category-card more-card" onClick={() => setShowFilters(true)}><Grid2X2 size={29}/><b>ดูเพิ่มเติม</b></button>
              </section>
            </>
          )}

          <section className="listing-section" id="recommended">
            <div className="section-heading"><h2><i/>{activeTab === "favorites" ? "รายการโปรด" : "ประกาศแนะนำ"}</h2><button onClick={() => { setCategory("All"); setQuery(""); setMaxPrice("ทั้งหมด"); }}>ดูทั้งหมด <ChevronRight size={17}/></button></div>
            <div className="bike-grid">
              {visibleBikes.map(bike => <article className="bike-card" key={bike.id}>
                <div className="bike-image" style={{ backgroundImage: `url("${bike.image}")` }} onClick={() => setSelected(bike)}>
                  <span className="sale-label">ขาย</span>
                  <button className={`heart-btn ${favorites.includes(bike.id) ? "liked" : ""}`} aria-label="เพิ่มรายการโปรด" onClick={e => { e.stopPropagation(); toggleFavorite(bike.id); }}><Heart size={22} fill={favorites.includes(bike.id) ? "currentColor" : "none"}/></button>
                </div>
                <div className="bike-info">
                  <h3>{bike.name}</h3>
                  <div className="bike-meta"><span><Gauge size={15}/>{bike.km} กม.</span><span><MapPin size={15}/>{bike.location}</span></div>
                  <div className="price-row"><strong>{money(bike.price)}</strong><button onClick={() => setSelected(bike)} aria-label="ดูรายละเอียด"><ChevronRight/></button></div>
                </div>
              </article>)}
              {visibleBikes.length === 0 && <div className="empty-state"><Bike size={38}/><b>ไม่พบรถที่ค้นหา</b><span>ลองเปลี่ยนคำค้นหาหรือตัวกรองดูนะ</span></div>}
            </div>
          </section>

          {activeTab === "home" && <section className="trust-banner"><div><h2>ซื้อขายปลอดภัย<br/>มั่นใจได้ 100%</h2><p><ShieldCheck size={16}/> ระบบยืนยันตัวตนและตรวจสอบผู้ขาย</p></div><div className="helmet">🪖</div></section>}
        </>
      ) : activeTab === "sell" ? (
        <section className="page-panel"><div className="panel-title"><h2>ลงประกาศขาย</h2><p>ลงขายบิ๊กไบค์ของคุณได้ง่าย ๆ</p></div><div className="upload-box"><Camera size={32}/><b>เพิ่มรูปรถของคุณ</b><small>Prototype: เลือกรูปภาพได้ในเวอร์ชันถัดไป</small></div><label>รุ่นรถ<input value={sellName} onChange={e => setSellName(e.target.value)} placeholder="เช่น Yamaha R1"/></label><label>ราคาที่ต้องการขาย<input value={sellPrice} onChange={e => setSellPrice(e.target.value)} placeholder="เช่น 350000" inputMode="numeric"/></label><label>รายละเอียด<textarea placeholder="ระบุปีรถ ระยะทาง และสภาพรถ..."/></label><button className="submit-btn" onClick={() => { if (!sellName || !sellPrice) return notify("กรุณากรอกรุ่นรถและราคา"); notify("บันทึกประกาศตัวอย่างเรียบร้อย"); setSellName(""); setSellPrice(""); }}>ลงประกาศ</button></section>
      ) : activeTab === "chat" ? (
        <section className="page-panel chat-panel"><div className="panel-title"><h2>แชท</h2><p>พูดคุยกับผู้ขาย</p></div><div className="chat-thread">{messages.map((m,i)=><div className={`bubble ${i % 2 ? "mine" : ""}`} key={i}>{m}</div>)}</div><div className="chat-compose"><input value={chatText} onChange={e => setChatText(e.target.value)} placeholder="พิมพ์ข้อความ..."/><button onClick={() => { if(chatText.trim()){setMessages([...messages, chatText]);setChatText("");}}}><Send size={18}/></button></div></section>
      ) : (
        <section className="page-panel profile-panel"><div className="profile-avatar">🏍️</div><h2>สมาชิก BigBikeTH</h2><p>ผู้ใช้งานตัวอย่าง</p><div className="profile-stats"><div><b>{favorites.length}</b><span>รายการโปรด</span></div><div><b>0</b><span>ประกาศของฉัน</span></div><div><b>0</b><span>กำลังขาย</span></div></div><button className="outline-btn" onClick={() => notify("ฟีเจอร์แก้ไขโปรไฟล์อยู่ระหว่างพัฒนา")}>แก้ไขโปรไฟล์</button></section>
      )}

      <nav className="bottom-nav">
        <button className={activeTab === "home" ? "selected" : ""} onClick={() => setActiveTab("home")}><Home/><span>หน้าหลัก</span></button>
        <button className={activeTab === "favorites" ? "selected" : ""} onClick={() => setActiveTab("favorites")}><Store/><span>รายการโปรด</span></button>
        <button className={`add-nav ${activeTab === "sell" ? "selected" : ""}`} onClick={() => setActiveTab("sell")}><span><Plus/></span><small>ลงประกาศ</small></button>
        <button className={activeTab === "chat" ? "selected" : ""} onClick={() => setActiveTab("chat")}><MessageCircle/><span>แชท</span><i>2</i></button>
        <button className={activeTab === "profile" ? "selected" : ""} onClick={() => setActiveTab("profile")}><ChartNoAxesColumn/><span>โปรไฟล์</span></button>
      </nav>
      <div className="home-indicator"/>

      {showFilters && <div className="modal-backdrop" onClick={() => setShowFilters(false)}><div className="filter-modal" onClick={e => e.stopPropagation()}><div className="modal-head"><h3>ตัวกรองรถ</h3><button onClick={() => setShowFilters(false)}><X/></button></div><p>ประเภทรถ</p><div className="filter-chips"><button className={category==="All"?"chosen":""} onClick={()=>setCategory("All")}>ทั้งหมด</button>{categories.map(c=><button className={category===c.value?"chosen":""} key={c.value} onClick={()=>setCategory(c.value)}>{c.name}</button>)}</div><p>ราคาสูงสุด</p><select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}><option>ทั้งหมด</option><option value="100000">ไม่เกิน ฿100,000</option><option value="300000">ไม่เกิน ฿300,000</option><option value="500000">ไม่เกิน ฿500,000</option><option value="1000000">ไม่เกิน ฿1,000,000</option></select><button className="submit-btn" onClick={()=>setShowFilters(false)}>แสดงผลลัพธ์</button></div></div>}

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="detail-modal" onClick={e => e.stopPropagation()}><div className="detail-image" style={{backgroundImage:`url("${selected.image}")`}}><button onClick={()=>setSelected(null)}><ArrowLeft/></button><button onClick={()=>toggleFavorite(selected.id)}><Heart fill={favorites.includes(selected.id)?"currentColor":"none"}/></button></div><div className="detail-content"><span className="sale-label inline-label">ขาย</span><h2>{selected.name}</h2><strong className="detail-price">{money(selected.price)}</strong><div className="detail-specs"><span><Gauge/> {selected.km} กม.</span><span><MapPin/> {selected.location}</span><span><Bike/> {selected.cc}</span></div><p>{selected.description}</p><button className="submit-btn" onClick={()=>{setSelected(null);setActiveTab("chat");notify("เปิดแชทตัวอย่างกับผู้ขายแล้ว");}}>ติดต่อผู้ขาย <MessageCircle size={18}/></button></div></div></div>}
      {toast && <div className="toast"><CheckCircle2 size={17}/>{toast}</div>}
    </main>
  );
}
