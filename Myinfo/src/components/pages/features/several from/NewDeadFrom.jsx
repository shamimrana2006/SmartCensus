import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function DeathRegistrationForm() {
  const [formData, setFormData] = useState({
    deceasedNameBn: "",
    deceasedNameEn: "",
    gender: "",
    deathDate: "",
    deathTime: "",
    nid: "",
    birthDate: "",
    estimatedAge: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    permanentAddress: "",
    deathPlace: "",
    causeOfDeath: "",
    division: "",
    district: "",
    upazila: "",
    informantName: "",
    informantContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    // Add API call here
    try {
      axios
        .post("http://localhost:5000/api/newDeadCertificate", formData)
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
          setFormData({
            deceasedNameBn: "",
            deceasedNameEn: "",
            gender: "",
            deathDate: "",
            deathTime: "",
            nid: "",
            birthDate: "",
            estimatedAge: "",
            fatherName: "",
            motherName: "",
            spouseName: "",
            permanentAddress: "",
            deathPlace: "",
            causeOfDeath: "",
            division: "",
            district: "",
            upazila: "",
            informantName: "",
            informantContact: "",
          });
          console.log("res", response);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        মৃত্যু নিবন্ধন ফর্ম (Death Registration)
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="font-semibold">মৃত ব্যক্তির নাম (বাংলায়)</label>
          <input
            type="text"
            name="deceasedNameBn"
            value={formData.deceasedNameBn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Deceased's Name (English)</label>
          <input
            type="text"
            name="deceasedNameEn"
            value={formData.deceasedNameEn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">লিঙ্গ</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          >
            <option value="">নির্বাচন করুন</option>
            <option value="male">পুরুষ</option>
            <option value="female">মহিলা</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">মৃত্যুর তারিখ</label>
          <input
            type="date"
            name="deathDate"
            value={formData.deathDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">মৃত্যুর সময়</label>
          <input
            type="time"
            name="deathTime"
            value={formData.deathTime}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">জাতীয় পরিচয়পত্র নম্বর (NID)</label>
          <input
            type="text"
            name="nid"
            value={formData.nid}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">জন্ম তারিখ (যদি জানা থাকে)</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">আনুমানিক বয়স</label>
          <input
            type="text"
            name="estimatedAge"
            value={formData.estimatedAge}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">পিতার নাম</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">মাতার নাম</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">স্বামী/স্ত্রীর নাম (যদি থাকে)</label>
          <input
            type="text"
            name="spouseName"
            value={formData.spouseName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">স্থায়ী ঠিকানা</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            rows="2"
            required
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">মৃত্যুর স্থান</label>
          <select
            name="deathPlace"
            value={formData.deathPlace}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          >
            <option value="">নির্বাচন করুন</option>
            <option value="home">বাড়ি</option>
            <option value="hospital">হাসপাতাল</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">মৃত্যুর কারণ (ঐচ্ছিক)</label>
          <textarea
            name="causeOfDeath"
            value={formData.causeOfDeath}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            rows="2"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">বিভাগ</label>
          <input
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">জেলা</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">উপজেলা</label>
          <input
            type="text"
            name="upazila"
            value={formData.upazila}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">তথ্য প্রদানকারীর নাম</label>
          <input
            type="text"
            name="informantName"
            value={formData.informantName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">তথ্য প্রদানকারীর মোবাইল</label>
          <input
            type="text"
            name="informantContact"
            value={formData.informantContact}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            সাবমিট করুন
          </button>
        </div>
      </form>
    </div>
  );
}
