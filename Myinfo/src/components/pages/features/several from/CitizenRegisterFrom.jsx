import { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
export default function CitizenRegistrationForm() {
  const [formData, setFormData] = useState({
    nameBn: "",
    nameEn: "",
    dob: "",
    gender: "",
    nidOrBirthId: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    presentAddress: "",
    division: "",
    district: "",
    upazila: "",
    photo: null,
    mobile: "",
    email: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:from frontend", formData);

    try {
      axios
        .post("http://localhost:5000/api/citizen", formData)
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
            nameBn: "",
            nameEn: "",
            dob: "",
            gender: "",
            nidOrBirthId: "",
            fatherName: "",
            motherName: "",
            permanentAddress: "",
            presentAddress: "",
            division: "",
            district: "",
            upazila: "",
            photo: null,
            mobile: "",
            email: "",
            agreed: false,
          });

          console.log("res", response);
        });
    } catch (error) {
      console.log("error", error);
    }
    // You can now send `formData` to your backend
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        নাগরিক নিবন্ধন ফর্ম (Citizen Registration)
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block font-semibold">পূর্ণ নাম (বাংলায়)</label>
          <input
            type="text"
            name="nameBn"
            value={formData.nameBn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Full Name (English)</label>
          <input
            type="text"
            name="nameEn"
            value={formData.nameEn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">জন্ম তারিখ</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">লিঙ্গ</label>
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
          <label className="block font-semibold">NID / জন্ম সনদ নম্বর</label>
          <input
            type="number"
            name="nidOrBirthId"
            value={formData.nidOrBirthId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">পিতার নাম</label>
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
          <label className="block font-semibold">মাতার নাম</label>
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
          <label className="block font-semibold">স্থায়ী ঠিকানা</label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">বর্তমান ঠিকানা</label>
          <input
            type="text"
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-semibold">বিভাগ</label>
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          >
            <option value="">নির্বাচন করুন</option>
            <option value="dhaka">ঢাকা</option>
            <option value="chattogram">চট্টগ্রাম</option>
            <option value="khulna">খুলনা</option>
            <option value="rajshahi">রাজশাহী</option>
            <option value="barishal">বরিশাল</option>
            <option value="sylhet">সিলেট</option>
            <option value="rangpur">রংপুর</option>
            <option value="mymensingh">ময়মনসিংহ</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">জেলা</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">উপজেলা</label>
          <input
            type="text"
            name="upazila"
            value={formData.upazila}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">ফটো আপলোড</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            accept="image/*"
          />
        </div>

        <div>
          <label className="block font-semibold">মোবাইল নাম্বার</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">ইমেইল (ঐচ্ছিক)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="md:col-span-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mr-2"
              required
            />
            আমি উপরের সকল তথ্য সঠিক এবং সত্য বলে ঘোষণা করছি
          </label>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            নিবন্ধন করুন
          </button>
        </div>
      </form>
    </div>
  );
}
