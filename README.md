# Quote Scheduling Website

A React-based scheduling application built with Vite for carpet cleaning and upholstery services. The application guides users through a four-stage process: quote generation, scheduling, information collection, and confirmation.

## Project Overview

This is a multi-stage booking system that allows customers to:
1. Generate quotes for carpet cleaning and upholstery services
2. Schedule appointments using an interactive calendar
3. Provide detailed information and complete the booking process
4. Confirm their booking details and pricing

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: [To be determined - CSS Modules/Styled Components/Tailwind CSS]
- **State Management**: [To be determined - Context API/Redux/Zustand]
- **Calendar Component**: [To be determined - react-calendar/react-datepicker]
- **Form Handling**: [To be determined - React Hook Form/Formik]
- **Testing**: [To be determined - Jest/Vitest + React Testing Library]

## Application Architecture

### Stage 1: Quote Generation
- Service selection (Carpet Cleaning, Upholstery, or both)
- Dynamic pricing calculation
- Form validation for user inputs
- Price tracking component initialization

### Stage 2: Scheduling
- Interactive calendar component
- Available time slots display
- Date and time selection
- Persistent price display from Stage 1

### Stage 3: Information Collection
- Detailed customer information input
- Contact details and preferences
- Special instructions and requirements
- Customer details form completion

### Stage 4: Confirmation
- Review of selected services and information
- Final pricing breakdown
- Complete booking submission
- Final booking confirmation

### Persistent Price Tracker
- Component appears on all four stages
- Real-time price updates
- Service breakdown display
- Persistent across navigation

## Development Roadmap

### Phase 1: Project Setup & Foundation
#### Checkpoint 1.1: Environment Setup
- [ ] Initialize Vite React project
- [ ] Configure development environment
- [ ] Set up folder structure
- [ ] Install essential dependencies
- [ ] Configure ESLint and Prettier

**Testing Criteria:**
- [ ] Development server runs successfully
- [ ] Build process completes without errors
- [ ] Hot module replacement works

#### Checkpoint 1.2: Basic Routing & Layout
- [ ] Set up React Router
- [ ] Create basic layout component
- [ ] Implement navigation between stages
- [ ] Create placeholder components for all stages

**Testing Criteria:**
- [ ] Navigation between all four stages works
- [ ] URL changes reflect current stage
- [ ] Back/forward browser buttons work correctly

### Phase 2: Core Components Development

#### Checkpoint 2.1: Price Tracker Component
- [ ] Create persistent price display component
- [ ] Implement price calculation logic
- [ ] Add service breakdown display
- [ ] Ensure component appears on all stages

**Testing Criteria:**
- [ ] Price tracker visible on all four stages
- [ ] Price updates reflect service selections
- [ ] Component maintains state across navigation
- [ ] Price breakdown is accurate and clear

#### Checkpoint 2.2: Stage 1 - Quote Generation
- [ ] Create service selection interface
- [ ] Implement carpet cleaning options
- [ ] Implement upholstery options
- [ ] Add form validation
- [ ] Connect to price tracker

**Testing Criteria:**
- [ ] All service options are selectable
- [ ] Price updates dynamically with selections
- [ ] Form validation prevents invalid submissions
- [ ] User can proceed to Stage 2 with valid selections

#### Checkpoint 2.3: Stage 2 - Scheduling Interface
- [ ] Integrate calendar component
- [ ] Implement available time slots
- [ ] Create time selection interface
- [ ] Validate scheduling constraints
- [ ] Persist pricing from Stage 1

**Testing Criteria:**
- [ ] Calendar displays correctly
- [ ] Only available dates are selectable
- [ ] Time slots show availability accurately
- [ ] Selected services and pricing carry over from Stage 1
- [ ] User can proceed to Stage 3 (Information Collection) with valid selections

#### Checkpoint 2.4: Stage 3 - Information Collection
- [ ] Create comprehensive information input form
- [ ] Implement customer contact details collection
- [ ] Add special instructions/requirements field
- [ ] Add service preferences options
- [ ] Create proceed to confirmation functionality
- [ ] Validate and store customer information

**Testing Criteria:**
- [ ] All required information fields are present
- [ ] Form validation works for required fields
- [ ] Optional fields handle empty values correctly
- [ ] User can proceed to Stage 4 (Final Confirmation)
- [ ] Customer information is properly validated and stored
- [ ] Navigation to next stage works correctly

#### Checkpoint 2.5: Stage 4 - Final Confirmation
- [ ] Create comprehensive booking review display
- [ ] Implement final price breakdown with all details
- [ ] Show all collected customer information
- [ ] Create final booking submission
- [ ] Display booking confirmation message
- [ ] Generate booking reference/confirmation number

**Testing Criteria:**
- [ ] All selected services and information are displayed correctly
- [ ] Final pricing matches previous stages
- [ ] Customer information is accurately displayed
- [ ] Final booking submission processes successfully
- [ ] Confirmation message displays with complete booking details
- [ ] Booking reference number is generated and displayed

### Phase 3: Enhancement & Polish

#### Checkpoint 3.1: State Management
- [ ] Implement global state management
- [ ] Ensure data persistence across stages
- [ ] Add loading states
- [ ] Implement error handling

**Testing Criteria:**
- [ ] State persists during page refresh
- [ ] Loading indicators show during async operations
- [ ] Error messages display for failed operations
- [ ] State management doesn't cause memory leaks

#### Checkpoint 3.2: UI/UX Improvements
- [ ] Implement responsive design
- [ ] Add loading animations
- [ ] Improve form interactions
- [ ] Add progress indicator
- [ ] Enhance accessibility

**Testing Criteria:**
- [ ] Application works on mobile devices
- [ ] All interactions have visual feedback
- [ ] Progress through stages is clear
- [ ] Application meets WCAG accessibility standards

#### Checkpoint 3.3: Testing & Quality Assurance
- [ ] Write unit tests for components
- [ ] Create integration tests for user flows
- [ ] Implement end-to-end testing
- [ ] Performance optimization
- [ ] Browser compatibility testing

**Testing Criteria:**
- [ ] All tests pass consistently
- [ ] Code coverage meets minimum threshold (80%+)
- [ ] Application loads within acceptable time
- [ ] Works across major browsers (Chrome, Firefox, Safari, Edge)

## File Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Layout.jsx
│   │   ├── PriceTracker.jsx
│   │   └── ProgressIndicator.jsx
│   ├── stage1/
│   │   ├── QuoteForm.jsx
│   │   ├── ServiceSelector.jsx
│   │   └── PriceCalculator.jsx
│   ├── stage2/
│   │   ├── SchedulingForm.jsx
│   │   ├── Calendar.jsx
│   │   └── TimeSlots.jsx
│   ├── stage3/
│   │   ├── InformationForm.jsx
│   │   ├── CustomerDetails.jsx
│   │   ├── SpecialInstructions.jsx
│   │   └── ServicePreferences.jsx
│   └── stage4/
│       ├── ConfirmationForm.jsx
│       ├── BookingSummary.jsx
│       ├── BookingReview.jsx
│       └── FinalConfirmation.jsx
├── hooks/
│   ├── useBooking.js
│   ├── usePricing.js
│   └── useScheduling.js
├── context/
│   └── BookingContext.jsx
├── utils/
│   ├── pricing.js
│   ├── validation.js
│   └── dateUtils.js
├── styles/
│   ├── global.css
│   └── components/
└── tests/
    ├── components/
    ├── integration/
    └── e2e/
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd scheduler

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Testing Strategy

### Unit Testing
- Test individual components in isolation
- Verify pricing calculations
- Validate form inputs and submissions

### Integration Testing
- Test data flow between stages
- Verify price persistence across navigation
- Test complete user workflows

### End-to-End Testing
- Test full user journey from quote to confirmation
- Verify calendar functionality
- Test form submissions and confirmations

## Performance Considerations

- Lazy load components where appropriate
- Optimize calendar rendering for large date ranges
- Minimize re-renders in price tracker component
- Implement proper error boundaries

## Accessibility Requirements

- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- Color contrast compliance
- Focus management between stages

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

1. Follow the established folder structure
2. Write tests for new features
3. Ensure accessibility standards are met
4. Update documentation for significant changes
5. Follow the checkpoint-based development approach

## License

[License information to be added]

## Contact

[Contact information to be added]