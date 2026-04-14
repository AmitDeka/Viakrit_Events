"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
  isBefore,
  startOfToday,
} from "date-fns";
import gsap from "gsap";
import { handleBooking } from "@/app/actions/booking";
import { Button } from "./ui/button";

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookingSystem() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.5 },
    );
  }, [step]);

  const renderHeader = () => {
    return (
      <div className="ghost-border flex items-center justify-between p-2 mb-8 border-b">
        <span className="font-display text-sm font-bold tracking-widest text-white uppercase">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="text-on_surface_variant hover:text-white hover:bg-surface-bright p-2 transition-colors rounded-full">
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="text-on_surface_variant hover:text-white hover:bg-surface-bright p-2 transition-colors rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 gap-1 mb-4 text-center text-[10px] font-bold tracking-widest text-on_surface_variant uppercase">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const today = startOfToday();

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const isPast = isBefore(day, today);
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const inMonth = isSameMonth(day, monthStart);

        days.push(
          <button
            key={day.toString()}
            type="button"
            disabled={isPast || !inMonth}
            className={`
              p-3 text-sm font-medium transition-all rounded-sm relative
              ${!inMonth ? "opacity-0 cursor-default" : ""}
              ${isPast ? "text-on_surface_variant/30 cursor-not-allowed" : "text-white hover:bg-surface-bright"}
              ${isSelected ? "bg-primary text-black font-bold shadow-[0_0_20px_rgba(151,169,255,0.4)]" : ""}
            `}
            onClick={() => {
              setSelectedDate(cloneDay);
              setStep(2);
            }}>
            {formattedDate}
          </button>,
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day.toString()}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className="space-y-1">{rows}</div>;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    formData.append("date", format(selectedDate, "PPP"));
    formData.append("time", selectedTime);

    const result = await handleBooking(formData);

    if (result.success) {
      setStep(4);
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );
    } else {
      setError(result.error);
    }
    setIsSubmitting(false);
  };

  if (step === 4) {
    return (
      <div
        ref={successRef}
        className="animate-in flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-primary/20 border-primary animate-pulse flex items-center justify-center w-20 h-20 mb-8 border rounded-full">
          <span className="text-primary text-4xl">✓</span>
        </div>
        <h2 className="font-display mb-4 text-4xl font-bold tracking-tighter text-white uppercase">
          Booking Confirmed
        </h2>
        <p className="text-on_surface_variant max-w-sm mb-8 leading-relaxed">
          The curated architecture of your moment has begun. Check your inbox
          (and spam) for confirmation details.
        </p>
        <div className="surface-container ghost-border w-full max-w-xs p-6 mb-8 text-left">
          <p className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
            Reserved Slot
          </p>
          <p className="mb-1 text-lg font-bold text-white">
            {format(selectedDate, "PPP")}
          </p>
          <p className="text-lg font-bold text-white">{selectedTime}</p>
        </div>
        <Button
          onClick={() => setStep(1)}
          className="bg-primary h-14 px-8 text-xs font-bold tracking-widest text-black uppercase rounded-none">
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col h-full">
      {/* Selection Summary */}
      <div className="flex gap-4 mb-8 text-[10px] uppercase font-bold tracking-[0.2em]">
        <span
          className={
            step >= 1
              ? "text-primary"
              : "text-on_surface_variant text-opacity-30"
          }>
          1. Date
        </span>
        <span className="text-on_surface_variant text-opacity-30">/</span>
        <span
          className={
            step >= 2
              ? "text-primary"
              : "text-on_surface_variant text-opacity-30"
          }>
          2. Time
        </span>
        <span className="text-on_surface_variant text-opacity-30">/</span>
        <span
          className={
            step >= 3
              ? "text-primary"
              : "text-on_surface_variant text-opacity-30"
          }>
          3. Details
        </span>
      </div>

      {step === 1 && (
        <div className="animate-in">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      )}

      {step === 2 && (
        <div className="animate-in">
          <h3 className="font-display flex items-center justify-between mb-6 font-bold text-white uppercase">
            Select Time
            <button
              onClick={() => setStep(1)}
              className="text-[10px] text-on_surface_variant hover:text-white uppercase tracking-widest">
              Back
            </button>
          </h3>
          <div className="md:grid-cols-3 grid grid-cols-2 gap-3">
            {times
              .filter((t) => {
                if (!isSameDay(selectedDate, new Date())) return true;

                const [time, modifier] = t.split(" ");
                let [hours, minutes] = time.split(":").map(Number);
                if (modifier === "PM" && hours < 12) hours += 12;
                if (modifier === "AM" && hours === 12) hours = 0;

                const slotTime = new Date();
                slotTime.setHours(hours, minutes, 0, 0);

                return isBefore(new Date(), slotTime);
              })
              .map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setSelectedTime(t);
                    setStep(3);
                  }}
                  className={`p-4 font-bold text-xs tracking-widest text-center border ghost-border transition-all hover:bg-surface-bright active:scale-95 ${selectedTime === t ? "bg-primary text-black" : "text-on_surface_variant"}`}>
                  {t}
                </button>
              ))}
          </div>
          {times.filter((t) => {
            if (!isSameDay(selectedDate, new Date())) return true;
            const [time, modifier] = t.split(" ");
            let [hours, minutes] = time.split(":").map(Number);
            if (modifier === "PM" && hours < 12) hours += 12;
            if (modifier === "AM" && hours === 12) hours = 0;
            const slotTime = new Date();
            slotTime.setHours(hours, minutes, 0, 0);
            return isBefore(new Date(), slotTime);
          }).length === 0 && (
            <p className="text-destructive mt-4 text-center text-xs font-bold uppercase tracking-widest">
              No more slots available for today
            </p>
          )}
        </div>
      )}

      {step === 3 && (
        <form
          onSubmit={handleSubmit}
          className="animate-in flex flex-col items-center">
          <h3 className="font-display flex items-center justify-between w-full mb-8 font-bold text-white uppercase">
            Contact Details
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-[10px] text-on_surface_variant hover:text-white uppercase tracking-widest">
              Back
            </button>
          </h3>

          <div className="w-full mb-12 space-y-6">
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on_surface_variant block">
                Full Name
              </label>
              <input
                required
                name="name"
                placeholder="Enter your name"
                className="bg-surface-container ghost-border focus:outline-none focus:border-primary w-full p-4 text-sm text-black transition-colors border"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on_surface_variant block">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-surface-container ghost-border focus:outline-none focus:border-primary w-full p-4 text-sm text-black transition-colors border"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on_surface_variant block">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us more about your event..."
                className="bg-surface-container ghost-border focus:outline-none focus:border-primary w-full p-4 text-sm text-black transition-colors border resize-none"
              />
            </div>

            <div className="surface-container ghost-border bg-primary/5 p-6 border rounded-sm">
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-2">
                Booking Summary
              </p>
              <p className="mb-1 text-sm font-bold text-white">
                {format(selectedDate, "PPP")}
              </p>
              <p className="text-sm font-bold text-white">{selectedTime}</p>
            </div>
          </div>

          {error && (
            <p className="text-destructive mb-6 text-xs font-bold">{error}</p>
          )}

          <Button
            disabled={isSubmitting}
            className="w-full h-14 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-none hover:scale-[1.02] transition-transform">
            {isSubmitting ? "Architecting..." : "CONFIRM BOOKING"}
          </Button>
        </form>
      )}
    </div>
  );
}
