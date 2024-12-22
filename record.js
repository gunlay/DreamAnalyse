// 初始化日历
function initCalendar() {
    const daysContainer = document.getElementById('calendar-days');
    const date = new Date(2024, 11); // 2024年12月
    const daysInMonth = new Date(2024, 12, 0).getDate();
    const firstDay = date.getDay();

    // 清空日历
    daysContainer.innerHTML = '';

    // 添加空白天数
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        daysContainer.appendChild(emptyDay);
    }

    // 添加月份天数
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = i;
        
        // 标记当前选中日期（示例中是22号）
        if (i === 22) {
            dayElement.className = 'day selected';
        }
        
        dayElement.addEventListener('click', () => {
            // 移除其他日期的选中状态
            document.querySelectorAll('.day').forEach(day => {
                day.classList.remove('selected');
            });
            // 添加当前日期的选中状态
            dayElement.classList.add('selected');
        });
        
        daysContainer.appendChild(dayElement);
    }
}

// 视图切换功能
function initViewToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const calendarView = document.querySelector('.calendar');
    const listView = document.querySelector('.dream-records');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.textContent === '日历') {
                calendarView.style.display = 'block';
                listView.style.display = 'none';
            } else {
                calendarView.style.display = 'none';
                listView.style.display = 'block';
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initViewToggle();
}); 