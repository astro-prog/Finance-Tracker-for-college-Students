
#  FinanceTracker - College Student Finance Management

A modern, high-end finance tracking web application specifically designed for college students. Track your income, expenses, and savings with beautiful visualizations and intuitive user experience.

![FinanceTracker Preview](https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

### Fully Deployed link(https://financetrackerforcollegestudents.netlify.app/)

## 🌟 Features

### 📊 **Dashboard Overview**
- Real-time financial statistics (Income, Expenses, Savings, Savings Rate)
- Color-coded cards with intuitive icons
- Instant financial health assessment

### 💳 **Transaction Management**
- Add income and expense transactions
- Categorized entries (Food, Transportation, Books, Entertainment, etc.)
- Date tracking and optional descriptions
- Easy transaction deletion and management

### 📈 **Visual Analytics**
- Interactive charts powered by Chart.js
- Expense breakdown by category (Doughnut chart)
- Monthly income vs expenses comparison (Bar chart)
- Hover tooltips with detailed information

### 🌍 **Multi-Currency Support**
- Support for 8 major currencies (USD, EUR, GBP, JPY, CAD, AUD, INR, CNY)
- Real-time currency conversion display
- Persistent currency selection

### 🌙 **Dark/Light Mode**
- Beautiful dark and light themes
- System preference detection
- Smooth transitions between modes
- Persistent theme selection

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Collapsible mobile navigation

## 🚀 Live Demo

**Live Application**: [https://startling-sundae-0df1f4.netlify.app](https://startling-sundae-0df1f4.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Charts**: Chart.js with React Chart.js 2
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Data Storage**: Local Storage (with MongoDB structure ready)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Charts.tsx      # Chart visualizations
│   ├── CurrencySelector.tsx
│   ├── Dashboard.tsx   # Main dashboard
│   ├── ThemeToggle.tsx
│   ├── TransactionForm.tsx
│   └── TransactionList.tsx
├── hooks/              # Custom React hooks
│   └── useTheme.ts     # Theme management
├── types/              # TypeScript definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── currency.ts     # Currency operations
│   └── storage.ts      # Local storage management
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 💡 Usage

### Adding Transactions
1. Click the "Add Transaction" button
2. Select transaction type (Income/Expense)
3. Enter amount, category, and optional description
4. Choose the date
5. Submit to save

### Viewing Analytics
- Navigate to the "Analytics" tab
- View expense breakdown by category
- Compare monthly income vs expenses
- Hover over charts for detailed information

### Changing Currency
- Use the currency selector in the header
- All amounts will be displayed in the selected currency
- Currency preference is saved automatically

### Theme Switching
- Click the theme toggle button (sun/moon icon)
- Switch between light and dark modes
- Theme preference is saved automatically

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradients (#3B82F6 to #8B5CF6)
- **Success**: Green (#10B981)
- **Danger**: Red (#EF4444)
- **Background**: Gradient from blue to purple tones

### Typography
- Clean, modern font stack
- Proper contrast ratios for accessibility
- Consistent sizing and spacing

### Animations
- Smooth hover transitions
- Card shadow effects
- Theme switching animations
- Chart interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Features

- Touch-optimized interface
- Responsive navigation menu
- Optimized chart interactions
- Mobile-friendly forms

## 🔮 Future Enhancements

- [ ] MongoDB integration for cloud storage
- [ ] User authentication and profiles
- [ ] Budget setting and alerts
- [ ] Export data to CSV/PDF
- [ ] Recurring transaction templates
- [ ] Financial goal tracking
- [ ] Expense sharing with roommates
- [ ] Bank account integration
- [ ] Advanced analytics and insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built with ❤️ by @astro-prog

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) for beautiful charts
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Pexels](https://www.pexels.com/) for stock images

---

**Start tracking your finances today and build better money habits for your future! 🎓💰**
