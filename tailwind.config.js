/** @type {import('tailwindcss').Config} */
// fontSize coi 1 unit = 16px. Lấy unit nhân với giá trị px tương ứng để ra tổng giá trị. Giá trị sau đó được đổi thành rem và dùng trong code
// fontsize trong tailwind được quy chế sẵn (xem docs). Nhưng có thể tạo ra unit riêng dựa theo bộ quy chuẩn vừa nói ở trên.
// VD: text-2 => font-size: 2 * 16 = 32px => 2 rem (32 / 16)
// spacing coi 1 unit = 4px. Lấy unit nhân với giá trị px tương ứng để ra tổng giá trị. Giá trị sau đó được đổi thành rem và dùng trong code
// VD: mt-20 => margin-top: 20 * 4 = 80px => 5 rem (80 / 16)

// Quy chế bổ sung giá trị mới:
// fontSize:
// thuộc tính (đơn vị): px / 16;
// phần tử (giá trị): px / 16
// VD: 70px => 4.375: '4.375rem'

// spacing:
// thuộc tính (đơn vị): px / 4;
// phần tử (giá trị): px / 16
// VD: 70px => 17.5: '4.375rem'
// 1 rem vẫn có cơ chế quy đổi = 16px.
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      1: "0.063rem",
      2: "0.125rem",
      3: "0.188rem",
      4: "0.25rem",
      5: "0.313rem",
      6: "0.375rem",
      8: "0.5rem",
      10: "0.625rem",
      11: "0.688rem",
      12: "0.75rem",
      14: "0.875rem",
      15: "0.938rem",
      16: "1rem", //16px
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      25: "1.563rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      44: "2.75rem",
      48: "3rem",
      50: "3.125rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
      75: "4.688rem",
      80: "5rem",
      90: "5.625rem",
      100: "6.25rem",
    },
    extend: {
      colors: {
        "light-green": "#C5E4E7",
        "app-title": "#3D6666",
        "pure-white": "#FFFFFF",
        "label-color": "#5E7A7D",
        "dark-green": "#00474B",
        "input-icon": "#9EBBBD",
        "other-white": "#F3F9FA",
        "bright-green": "#26C2AE",
        "custom-tip-btn-color": "#547878",
        "custom-tip-btn-bg-color": "#F3F9FA",
        "deep-color": "#7F9D9F",
        "hover-bg-color": "#9FE8DF",
        "error-color": "#E17457",
      },
      spacing: {
        26: "6.5rem",
        230: "57.5rem",
        103.25: "25.8125rem",
        104.25: "26.0625rem",
        13: "3.25rem",
        31.75: "7.9375rem",
      },
    },
  },
  plugins: [],
};
