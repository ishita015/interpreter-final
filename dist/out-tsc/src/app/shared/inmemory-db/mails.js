var MailDB = /** @class */ (function () {
    function MailDB() {
    }
    MailDB.messages = [
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('1/25/2018'),
            selected: false,
            subject: 'Welcome to Angular World',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/3.jpg'
            },
            date: new Date('4/3/2017'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/4.jpg'
            },
            date: new Date('1/20/2017'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/5.jpg'
            },
            date: new Date('1/8/2017'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/9.jpg'
            },
            date: new Date('10/3/2016'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/10.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/15.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/12.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/13.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/16.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/17.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('10/3/2012'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        }
    ];
    return MailDB;
}());
export { MailDB };
//# sourceMappingURL=mails.js.map