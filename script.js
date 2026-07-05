const menuItems = [
  {
    "id": 1,
    "name": "برجر لحم",
    "category": "وجبة سريعة",
    "price": 4500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 2,
    "name": "برجر دجاج",
    "category": "وجبة سريعة",
    "price": 4000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606755962773-d324e2dabd71?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 3,
    "name": "بيتزا مارجريتا",
    "category": "بيتزا",
    "price": 6500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 4,
    "name": "بيتزا دجاج",
    "category": "بيتزا",
    "price": 7500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 5,
    "name": "مشاوي مشكلة",
    "category": "مشويات",
    "price": 9000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 6,
    "name": "كباب",
    "category": "مشويات",
    "price": 7000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 7,
    "name": "دجاج مشوي",
    "category": "دجاج",
    "price": 8000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 8,
    "name": "فرايد تشكن",
    "category": "دجاج",
    "price": 6500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 9,
    "name": "سمك مقلي",
    "category": "بحريات",
    "price": 8500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 10,
    "name": "جمبري",
    "category": "بحريات",
    "price": 10000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 11,
    "name": "باسطة",
    "category": "سوداني",
    "price": 2500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 12,
    "name": "قراصة",
    "category": "سوداني",
    "price": 3000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 13,
    "name": "باستا ألفريدو",
    "category": "إيطالي",
    "price": 7000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 14,
    "name": "سباغيتي",
    "category": "إيطالي",
    "price": 6200,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 15,
    "name": "سلطة سيزر",
    "category": "سلطات",
    "price": 3500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 16,
    "name": "سلطة خضراء",
    "category": "سلطات",
    "price": 2500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 17,
    "name": "تشيز كيك",
    "category": "حلويات",
    "price": 3000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 18,
    "name": "كيك شوكولاتة",
    "category": "حلويات",
    "price": 2800,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 19,
    "name": "عصير برتقال",
    "category": "مشروبات باردة",
    "price": 1800,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 20,
    "name": "موهيتو",
    "category": "مشروبات باردة",
    "price": 2200,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 21,
    "name": "قهوة",
    "category": "مشروبات ساخنة",
    "price": 1500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 22,
    "name": "كابتشينو",
    "category": "مشروبات ساخنة",
    "price": 2000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 23,
    "name": "برجر لحم كلاسيك",
    "category": "وجبة سريعة",
    "price": 4500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 24,
    "name": "برجر دجاج كلاسيك",
    "category": "وجبة سريعة",
    "price": 4000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606755962773-d324e2dabd71?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 25,
    "name": "بيتزا مارجريتا كلاسيك",
    "category": "بيتزا",
    "price": 6500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 26,
    "name": "بيتزا دجاج كلاسيك",
    "category": "بيتزا",
    "price": 7500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 27,
    "name": "مشاوي مشكلة كلاسيك",
    "category": "مشويات",
    "price": 9000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 28,
    "name": "كباب كلاسيك",
    "category": "مشويات",
    "price": 7000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 29,
    "name": "دجاج مشوي كلاسيك",
    "category": "دجاج",
    "price": 8000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 30,
    "name": "فرايد تشكن كلاسيك",
    "category": "دجاج",
    "price": 6500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 31,
    "name": "سمك مقلي كلاسيك",
    "category": "بحريات",
    "price": 8500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 32,
    "name": "جمبري كلاسيك",
    "category": "بحريات",
    "price": 10000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 33,
    "name": "باسطة كلاسيك",
    "category": "سوداني",
    "price": 2500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 34,
    "name": "قراصة كلاسيك",
    "category": "سوداني",
    "price": 3000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 35,
    "name": "باستا ألفريدو كلاسيك",
    "category": "إيطالي",
    "price": 7000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 36,
    "name": "سباغيتي كلاسيك",
    "category": "إيطالي",
    "price": 6200,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 37,
    "name": "سلطة سيزر كلاسيك",
    "category": "سلطات",
    "price": 3500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 38,
    "name": "سلطة خضراء كلاسيك",
    "category": "سلطات",
    "price": 2500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 39,
    "name": "تشيز كيك كلاسيك",
    "category": "حلويات",
    "price": 3000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 40,
    "name": "كيك شوكولاتة كلاسيك",
    "category": "حلويات",
    "price": 2800,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 41,
    "name": "عصير برتقال كلاسيك",
    "category": "مشروبات باردة",
    "price": 1800,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 42,
    "name": "موهيتو كلاسيك",
    "category": "مشروبات باردة",
    "price": 2200,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 43,
    "name": "قهوة كلاسيك",
    "category": "مشروبات ساخنة",
    "price": 1500,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 44,
    "name": "كابتشينو كلاسيك",
    "category": "مشروبات ساخنة",
    "price": 2000,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 45,
    "name": "برجر لحم سبايسي",
    "category": "وجبة سريعة",
    "price": 4860,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 46,
    "name": "برجر دجاج سبايسي",
    "category": "وجبة سريعة",
    "price": 4320,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606755962773-d324e2dabd71?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 47,
    "name": "بيتزا مارجريتا سبايسي",
    "category": "بيتزا",
    "price": 7020,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 48,
    "name": "بيتزا دجاج سبايسي",
    "category": "بيتزا",
    "price": 8100,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 49,
    "name": "مشاوي مشكلة سبايسي",
    "category": "مشويات",
    "price": 9720,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 50,
    "name": "كباب سبايسي",
    "category": "مشويات",
    "price": 7560,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 51,
    "name": "دجاج مشوي سبايسي",
    "category": "دجاج",
    "price": 8640,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 52,
    "name": "فرايد تشكن سبايسي",
    "category": "دجاج",
    "price": 7020,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 53,
    "name": "سمك مقلي سبايسي",
    "category": "بحريات",
    "price": 9180,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 54,
    "name": "جمبري سبايسي",
    "category": "بحريات",
    "price": 10800,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 55,
    "name": "باسطة سبايسي",
    "category": "سوداني",
    "price": 2700,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 56,
    "name": "قراصة سبايسي",
    "category": "سوداني",
    "price": 3240,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 57,
    "name": "باستا ألفريدو سبايسي",
    "category": "إيطالي",
    "price": 7560,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 58,
    "name": "سباغيتي سبايسي",
    "category": "إيطالي",
    "price": 6696,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 59,
    "name": "سلطة سيزر سبايسي",
    "category": "سلطات",
    "price": 3780,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 60,
    "name": "سلطة خضراء سبايسي",
    "category": "سلطات",
    "price": 2700,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 61,
    "name": "تشيز كيك سبايسي",
    "category": "حلويات",
    "price": 3240,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 62,
    "name": "كيك شوكولاتة سبايسي",
    "category": "حلويات",
    "price": 3024,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 63,
    "name": "عصير برتقال سبايسي",
    "category": "مشروبات باردة",
    "price": 1944,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 64,
    "name": "موهيتو سبايسي",
    "category": "مشروبات باردة",
    "price": 2376,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 65,
    "name": "قهوة سبايسي",
    "category": "مشروبات ساخنة",
    "price": 1620,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 66,
    "name": "كابتشينو سبايسي",
    "category": "مشروبات ساخنة",
    "price": 2160,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 67,
    "name": "برجر لحم ديلوكس",
    "category": "وجبة سريعة",
    "price": 5220,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 68,
    "name": "برجر دجاج ديلوكس",
    "category": "وجبة سريعة",
    "price": 4640,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606755962773-d324e2dabd71?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 69,
    "name": "بيتزا مارجريتا ديلوكس",
    "category": "بيتزا",
    "price": 7539,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 70,
    "name": "بيتزا دجاج ديلوكس",
    "category": "بيتزا",
    "price": 8700,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 71,
    "name": "مشاوي مشكلة ديلوكس",
    "category": "مشويات",
    "price": 10440,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 72,
    "name": "كباب ديلوكس",
    "category": "مشويات",
    "price": 8119,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 73,
    "name": "دجاج مشوي ديلوكس",
    "category": "دجاج",
    "price": 9280,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 74,
    "name": "فرايد تشكن ديلوكس",
    "category": "دجاج",
    "price": 7539,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 75,
    "name": "سمك مقلي ديلوكس",
    "category": "بحريات",
    "price": 9860,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 76,
    "name": "جمبري ديلوكس",
    "category": "بحريات",
    "price": 11600,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 77,
    "name": "باسطة ديلوكس",
    "category": "سوداني",
    "price": 2900,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 78,
    "name": "قراصة ديلوكس",
    "category": "سوداني",
    "price": 3479,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 79,
    "name": "باستا ألفريدو ديلوكس",
    "category": "إيطالي",
    "price": 8119,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 80,
    "name": "سباغيتي ديلوكس",
    "category": "إيطالي",
    "price": 7191,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 81,
    "name": "سلطة سيزر ديلوكس",
    "category": "سلطات",
    "price": 4059,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 82,
    "name": "سلطة خضراء ديلوكس",
    "category": "سلطات",
    "price": 2900,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 83,
    "name": "تشيز كيك ديلوكس",
    "category": "حلويات",
    "price": 3479,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 84,
    "name": "كيك شوكولاتة ديلوكس",
    "category": "حلويات",
    "price": 3248,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 85,
    "name": "عصير برتقال ديلوكس",
    "category": "مشروبات باردة",
    "price": 2088,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 86,
    "name": "موهيتو ديلوكس",
    "category": "مشروبات باردة",
    "price": 2552,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 87,
    "name": "قهوة ديلوكس",
    "category": "مشروبات ساخنة",
    "price": 1739,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 88,
    "name": "كابتشينو ديلوكس",
    "category": "مشروبات ساخنة",
    "price": 2320,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 89,
    "name": "برجر لحم كبير",
    "category": "وجبة سريعة",
    "price": 5580,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 90,
    "name": "برجر دجاج كبير",
    "category": "وجبة سريعة",
    "price": 4960,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606755962773-d324e2dabd71?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 91,
    "name": "بيتزا مارجريتا كبير",
    "category": "بيتزا",
    "price": 8060,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 92,
    "name": "بيتزا دجاج كبير",
    "category": "بيتزا",
    "price": 9300,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 93,
    "name": "مشاوي مشكلة كبير",
    "category": "مشويات",
    "price": 11160,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 94,
    "name": "كباب كبير",
    "category": "مشويات",
    "price": 8680,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 95,
    "name": "دجاج مشوي كبير",
    "category": "دجاج",
    "price": 9920,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 96,
    "name": "فرايد تشكن كبير",
    "category": "دجاج",
    "price": 8060,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 97,
    "name": "سمك مقلي كبير",
    "category": "بحريات",
    "price": 10540,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 98,
    "name": "جمبري كبير",
    "category": "بحريات",
    "price": 12400,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 99,
    "name": "باسطة كبير",
    "category": "سوداني",
    "price": 3100,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 100,
    "name": "قراصة كبير",
    "category": "سوداني",
    "price": 3720,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 101,
    "name": "باستا ألفريدو كبير",
    "category": "إيطالي",
    "price": 8680,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 102,
    "name": "سباغيتي كبير",
    "category": "إيطالي",
    "price": 7688,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 103,
    "name": "سلطة سيزر كبير",
    "category": "سلطات",
    "price": 4340,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 104,
    "name": "سلطة خضراء كبير",
    "category": "سلطات",
    "price": 3100,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 105,
    "name": "تشيز كيك كبير",
    "category": "حلويات",
    "price": 3720,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 106,
    "name": "كيك شوكولاتة كبير",
    "category": "حلويات",
    "price": 3472,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 107,
    "name": "عصير برتقال كبير",
    "category": "مشروبات باردة",
    "price": 2232,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 108,
    "name": "موهيتو كبير",
    "category": "مشروبات باردة",
    "price": 2728,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 109,
    "name": "قهوة كبير",
    "category": "مشروبات ساخنة",
    "price": 1860,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    "id": 110,
    "name": "كابتشينو كبير",
    "category": "مشروبات ساخنة",
    "price": 2480,
    "desc": "طبق مميز من مطعم جولدن بايت بمكونات طازجة.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  }
];

let activeCategory = "الكل";
let cart = [];

const categories = ["الكل", ...new Set(menuItems.map(item => item.category))];

function renderCategories() {
  const box = document.getElementById("categories");
  box.innerHTML = categories.map(cat =>
    `<button class="cat ${cat === activeCategory ? "active" : ""}" onclick="setCategory('${cat}')">${cat}</button>`
  ).join("");
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderMenu();
}

function renderMenu() {
  const search = document.getElementById("searchInput").value.trim().toLowerCase();
  const grid = document.getElementById("itemsGrid");

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === "الكل" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  grid.innerHTML = filtered.map(item => `
    <article class="card">
      <img src="${item.image}" alt="${item.name}">
      <div class="cardContent">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">${item.price.toLocaleString()} SDG</div>
        <button class="add" onclick="addToCart(${item.id})">إضافة للسلة +</button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = menuItems.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({...item, qty: 1});
  renderCart();
}

function changeQty(id, value) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += value;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function renderCart() {
  const box = document.getElementById("cartItems");
  document.getElementById("cartCount").textContent = cart.reduce((s, x) => s + x.qty, 0);

  if (!cart.length) {
    box.innerHTML = `<p style="color:#aaa;text-align:center">السلة فارغة الآن</p>`;
  } else {
    box.innerHTML = cart.map(item => `
      <div class="cartItem">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <span>${item.price.toLocaleString()} SDG</span>
          <div class="qty">
            <button onclick="changeQty(${item.id}, -1)">-</button>
            <b>${item.qty}</b>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove" onclick="removeItem(${item.id})">×</button>
      </div>
    `).join("");
  }

  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const delivery = cart.length ? 1500 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  document.getElementById("subtotal").textContent = subtotal.toLocaleString() + " SDG";
  document.getElementById("delivery").textContent = delivery.toLocaleString() + " SDG";
  document.getElementById("tax").textContent = tax.toLocaleString() + " SDG";
  document.getElementById("total").textContent = total.toLocaleString() + " SDG";
}

function confirmOrder() {
  if (!cart.length) return alert("السلة فارغة.");
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.querySelector("input[name='payment']:checked").value;
  if (!name || !phone || !address) return alert("أكمل بيانات العميل.");

  const order = cart.map(i => `- ${i.name} × ${i.qty} = ${(i.price*i.qty).toLocaleString()} SDG`).join("%0A");
  const total = document.getElementById("total").textContent;
  const msg = `طلب جديد من Golden Bite%0A%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالعنوان: ${address}%0Aطريقة الدفع: ${payment}%0A%0Aالطلب:%0A${order}%0A%0Aالإجمالي: ${total}`;
  window.open(`https://wa.me/249912345678?text=${msg}`, "_blank");
}

function scrollToCart() {
  document.getElementById("cart").scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll("input[name='payment']").forEach(input => {
  input.addEventListener("change", () => {
    document.getElementById("bankInfo").style.display = input.value === "بنكك" && input.checked ? "block" : "none";
  });
});

renderCategories();
renderMenu();
renderCart();
