import { ProductDB } from './products';
import { MailDB } from './mails';
import { CountryDB } from './countries';
import { ChatDB } from './chat-db';
import { InvoiceDB } from './invoices';
import { UserDB } from './users';
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'products': ProductDB.products,
            'invoices': InvoiceDB.invoices,
            'mails': MailDB.messages,
            'countries': CountryDB.countries,
            'contacts': ChatDB.contacts,
            'chat-collections': ChatDB.chatCollection,
            'chat-user': ChatDB.user,
            'users': UserDB.users
        };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=inmemory-db.service.js.map