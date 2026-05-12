// Shared constants and class maps used by renderers.

// 九州親子大冒險 - trip data and lookup tables
// Kept as plain globals so existing inline handlers and render code remain unchanged.

const icons = { play: '🎡', food: '🍽️', sight: '📸', drive: '🚗', action: '✅', rain: '☔', shop: '🛍️' };
        const bgColors = { play: 'bg-pink-50 border-pink-200', food: 'bg-yellow-50 border-yellow-200', sight: 'bg-blue-50 border-blue-200', drive: 'bg-slate-50 border-slate-300', action: 'bg-purple-50 border-purple-200', rain: 'bg-cyan-50 border-cyan-200', shop: 'bg-emerald-50 border-emerald-200' };
        const BACKUP_CARD_BASE_CLASS = "bg-white p-4 md:p-5 rounded-xl border shadow-sm hover:shadow-md transition-all flex items-start gap-3";
