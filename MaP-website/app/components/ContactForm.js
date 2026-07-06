"use client";

import { useState } from "react";

const contactTypes = [
  { value: "company", label: "企業協働" },
  { value: "school", label: "学校連携" },
  { value: "student", label: "学生団体連携" },
  { value: "other", label: "その他" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    tel: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "お名前を入力してください";
    if (!form.email.trim()) newErrors.email = "メールアドレスを入力してください";
    if (!form.type) newErrors.type = "お問い合わせ種別を選択してください";
    if (!form.message.trim()) newErrors.message = "お問い合わせ内容を入力してください";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // TODO: 将来的にはAPI Route (/api/contact) に POST する形に切り替える
    const subject = encodeURIComponent(
      `【MaP お問い合わせ】${form.type ? contactTypes.find((t) => t.value === form.type)?.label : ""} - ${form.org || form.name} 様`
    );
    const body = encodeURIComponent(
      `お名前: ${form.name}\n所属: ${form.org}\nメールアドレス: ${form.email}\n電話番号: ${form.tel}\nお問い合わせ種別: ${contactTypes.find((t) => t.value === form.type)?.label || ""}\n\nお問い合わせ内容:\n${form.message}`
    );
    window.location.href = `mailto:contact@make-a-pulse.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-gray-200 focus:border-[#E84040] focus:ring-1 focus:ring-[#E84040]"
    }`;

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">送信しました！</h3>
        <p className="text-gray-500">メールアプリが開きます。送信をご確認ください。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            お名前 <span className="text-[#E84040]">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass("name")}
            placeholder="山田 太郎"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Org */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            所属（企業名・学校名・団体名）
          </label>
          <input
            type="text"
            value={form.org}
            onChange={(e) => setForm({ ...form, org: e.target.value })}
            className={inputClass("org")}
            placeholder="〇〇株式会社"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            メールアドレス <span className="text-[#E84040]">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass("email")}
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Tel */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            電話番号
          </label>
          <input
            type="tel"
            value={form.tel}
            onChange={(e) => setForm({ ...form, tel: e.target.value })}
            className={inputClass("tel")}
            placeholder="090-0000-0000"
          />
        </div>
      </div>

      {/* Contact type */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
          お問い合わせ種別 <span className="text-[#E84040]">*</span>
        </label>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className={`${inputClass("type")} bg-white`}
        >
          <option value="">選択してください</option>
          {contactTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.type && <p className="text-xs text-red-500 mt-1">{errors.type}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
          お問い合わせ内容 <span className="text-[#E84040]">*</span>
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass("message")} resize-none`}
          placeholder="お問い合わせ内容をご記入ください..."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full text-white font-semibold text-sm hover:scale-[1.02] transition-transform shadow-md"
        style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
      >
        送信する →
      </button>
    </form>
  );
}
