"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import servicesData from "@/data/services.json";

export default function ComparePage() {
  const [feeFilter, setFeeFilter] = useState<string>("all");
  const [speedFilter, setSpeedFilter] = useState<string>("all");
  const [targetFilter, setTargetFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("speed");

  // フィルタリング
  let filteredServices = [...servicesData];

  if (feeFilter !== "all") {
    const maxFee = parseInt(feeFilter);
    filteredServices = filteredServices.filter((s) => s.fee.max <= maxFee);
  }

  if (speedFilter !== "all") {
    const maxMinutes = parseInt(speedFilter);
    filteredServices = filteredServices.filter((s) => s.speedMinutes <= maxMinutes);
  }

  if (targetFilter !== "all") {
    filteredServices = filteredServices.filter((s) => 
      s.target.includes(targetFilter)
    );
  }

  // ソート
  if (sortBy === "speed") {
    filteredServices.sort((a, b) => a.speedMinutes - b.speedMinutes);
  } else if (sortBy === "fee") {
    filteredServices.sort((a, b) => a.fee.min - b.fee.min);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "比較一覧" }]} />

      <h1 className="text-4xl font-bold text-slate-800 mb-4">ファクタリング会社比較一覧</h1>
      <p className="text-lg text-slate-600 mb-8">
        全{servicesData.length}社のファクタリング会社を手数料・入金スピード・対応対象で比較できます。
      </p>

      {/* フィルター */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">絞り込み条件</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 手数料フィルター */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              手数料上限
            </label>
            <select
              value={feeFilter}
              onChange={(e) => setFeeFilter(e.target.value)}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2 focus:border-primary focus:outline-none"
            >
              <option value="all">指定なし</option>
              <option value="5">5%以下</option>
              <option value="10">10%以下</option>
              <option value="15">15%以下</option>
            </select>
          </div>

          {/* 入金スピードフィルター */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              入金スピード
            </label>
            <select
              value={speedFilter}
              onChange={(e) => setSpeedFilter(e.target.value)}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2 focus:border-primary focus:outline-none"
            >
              <option value="all">指定なし</option>
              <option value="60">1時間以内</option>
              <option value="120">2時間以内</option>
              <option value="480">即日（当日中）</option>
            </select>
          </div>

          {/* 対応対象フィルター */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              対応対象
            </label>
            <select
              value={targetFilter}
              onChange={(e) => setTargetFilter(e.target.value)}
              className="w-full border-2 border-slate-300 rounded-lg px-4 py-2 focus:border-primary focus:outline-none"
            >
              <option value="all">指定なし</option>
              <option value="法人">法人</option>
              <option value="個人事業主">個人事業主</option>
            </select>
          </div>
        </div>

        {/* ソート */}
        <div className="mt-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">
            並び順
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setSortBy("speed")}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                sortBy === "speed"
                  ? "bg-primary text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              入金スピード順
            </button>
            <button
              onClick={() => setSortBy("fee")}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                sortBy === "fee"
                  ? "bg-primary text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              手数料（下限）順
            </button>
          </div>
        </div>

        {/* リセットボタン */}
        <div className="mt-6">
          <button
            onClick={() => {
              setFeeFilter("all");
              setSpeedFilter("all");
              setTargetFilter("all");
              setSortBy("speed");
            }}
            className="text-primary hover:text-blue-800 font-bold"
          >
            条件をリセット
          </button>
        </div>
      </div>

      {/* 検索結果 */}
      <div className="mb-4">
        <p className="text-slate-600">
          <span className="font-bold text-primary text-xl">{filteredServices.length}</span>
          件のサービスが見つかりました
        </p>
      </div>

      {/* 比較表 */}
      {filteredServices.length > 0 ? (
        <ComparisonTable services={filteredServices} />
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <p className="text-xl text-slate-600">
            条件に一致するサービスが見つかりませんでした。
          </p>
          <button
            onClick={() => {
              setFeeFilter("all");
              setSpeedFilter("all");
              setTargetFilter("all");
            }}
            className="mt-6 bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            条件をリセット
          </button>
        </div>
      )}
    </div>
  );
}
