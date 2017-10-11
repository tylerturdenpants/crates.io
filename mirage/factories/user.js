import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {
        return i;
    },
    email: () => faker.internet.email(),
    email_verified: () => true,
    email_verification_sent: () => true,

    name(i) {
        return `Person ${i}`;
    },

    login(i) {
        return `user_${i}`;
    },

    avatar: () => faker.internet.avatar(),

    url: () => faker.internet.url(),
    kind: () => 'user',
});
