import { combineReducers } from 'redux';
import { ModalReducer } from './modals/modalsReducer'
import { SideBarReducer } from './sidebar/sidebarReducer'
import { ContactsReducer } from './contacts/contactsReducer'
import { VacanciesReducer } from './vacancies/vacanciesReducer'
import { ArticlesReducer } from './articles/articlesReducer'
import { FormsReducer } from './forms/formsReducer';
import { BreakpointReducer } from './breakpoint/breakpointReducer'
import { HeaderReducer} from './header/headerReducer'
import { TagsReducer } from './tags/tagsReducer';
import { CardsReducer } from './cards/cardsReducer';
import { PaginationReducer } from './pagination/paginationReducer';
import { AboutReducer } from './about/aboutReducer';
import { ChecksReducer } from './checks/checksReducer';
import { EmployeesReducer } from './employees/employeesReducer';
import { SearchReducer } from './search/searchReducer';
import { CareerReducer } from './career/careerReducer';
import { RoutingReducer } from './routing/routingReducer';
import { ContactFormReducer } from './contactForm/contactFormReducer';
import { ScrollBlockerReducer } from './scrollBlocker/scrollBlockerReducer';


export const rootReducer = combineReducers({
    about: AboutReducer,
    articles: ArticlesReducer,
    breakpoint: BreakpointReducer,
    header: HeaderReducer,
    scrollBlocker: ScrollBlockerReducer,
    cards: CardsReducer,
    career: CareerReducer,
    checks: ChecksReducer,
    contacts: ContactsReducer,
    contactForm: ContactFormReducer,
    employees: EmployeesReducer,
    forms: FormsReducer,
    modals: ModalReducer,
    pagination: PaginationReducer,
    routing: RoutingReducer,
    search: SearchReducer,
    sidebar: SideBarReducer,
    tags: TagsReducer,
    vacancies: VacanciesReducer,
})
