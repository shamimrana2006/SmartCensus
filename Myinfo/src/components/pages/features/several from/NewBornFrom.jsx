import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function NewbornRegistrationForm() {
  const [formData, setFormData] = useState({
    babyNameBn: "",
    babyNameEn: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    birthCertNo: "",
    fatherName: "",
    motherName: "",
    fatherNID: "",
    motherNID: "",
    division: "",
    district: "",
    upazila: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    
    // You can send `formData` to your backend here


      try {
      axios
        .post("http://localhost:5000/api/newborn", formData)
        .then((response) => {
          toast("🦄Successfully Applied", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
       

          console.log("res", response);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">নবজাতক নিবন্ধন ফর্ম (Newborn Registration)</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block font-semibold">শিশুর নাম (বাংলায়)</label>
          <input type="text" name="babyNameBn" value={formData.babyNameBn} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required />
        </div>

        <div>
          <label className="block font-semibold">Baby's Name (English)</label>
          <input type="text" name="babyNameEn" value={formData.babyNameEn} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required />
        </div>

        <div>
          <label className="block font-semibold">লিঙ্গ (Gender)</label>
          <select name="gender" value={formData.gender} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required>
            <option value="">নির্বাচন করুন</option>
            <option value="male">পুরুষ</option>
            <option value="female">মহিলা</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">জন্ম তারিখ</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required />
        </div>

        <div>
          <label className="block font-semibold">জন্মের সময়</label>
          <input type="time" name="birthTime" value={formData.birthTime} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">জন্মস্থান</label>
          <select name="birthPlace" value={formData.birthPlace} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required>
            <option value="">নির্বাচন করুন</option>
            <option value="home">বাড়ি</option>
            <option value="hospital">হাসপাতাল</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">জন্ম নিবন্ধন নম্বর (যদি থাকে)</label>
          <input type="text" name="birthCertNo" value={formData.birthCertNo} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">পিতার নাম</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required />
        </div>

        <div>
          <label className="block font-semibold">মাতার নাম</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" required />
        </div>

        <div>
          <label className="block font-semibold">পিতার NID</label>
          <input type="text" name="fatherNID" value={formData.fatherNID} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">মাতার NID</label>
          <input type="text" name="motherNID" value={formData.motherNID} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">বিভাগ</label>
          <input type="text" name="division" value={formData.division} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">জেলা</label>
          <input type="text" name="district" value={formData.district} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-semibold">উপজেলা</label>
          <input type="text" name="upazila" value={formData.upazila} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold">বর্তমান ঠিকানা</label>
          <textarea name="address" value={formData.address} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" rows="2"></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold">যোগাযোগ নম্বর</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            সাবমিট করুন
          </button>
        </div>
      </form>
    </div>
  );
}
