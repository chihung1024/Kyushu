// Parking navigation button render helpers.

// 九州親子大冒險 - reusable render helpers and UI components

function getParkingButtonLabel(query) {
            if (!query) return '停車場導航';
            const key = String(query).trim();
            if (parkingLabelLookup[key]) return parkingLabelLookup[key];
            const cleaned = key
                .replace(/熊本市中央区新市街8-7/g, '')
                .replace(/\s*(駐車場|停車場)\s*$/g, '')
                .replace(/\s+/g, ' ')
                .trim();
            return `${cleaned || '目的地'}停車場導航`;
        }

        function parkingButtonHtml(query, label = null) {
            if (!query) return '';
            const buttonLabel = label || getParkingButtonLabel(query);
            return `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer" class="nav-pill parking-nav-pill inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"><span>🅿️</span> ${buttonLabel}</a>`;
        }

        function renderParkingButtons(parkingInfo) {
            if (!parkingInfo) return '';
            const items = Array.isArray(parkingInfo) ? parkingInfo : [parkingInfo];
            return items.map(item => {
                if (!item) return '';
                if (typeof item === 'string') return parkingButtonHtml(item);
                return parkingButtonHtml(item.query, item.label);
            }).join('');
        }
