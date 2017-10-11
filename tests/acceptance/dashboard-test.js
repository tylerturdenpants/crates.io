import { test } from 'qunit';
import moduleForAcceptance from 'cargo/tests/helpers/module-for-acceptance';
import hasText from 'cargo/tests/helpers/has-text';

moduleForAcceptance('Acceptance | dashboard page', {
    needs: ['service:session']
});

test('requires login', async function(assert) {
    server.loadFixtures();

    await visit('/dashboard');

    assert.equal(currentURL(), '/');
    hasText(assert, '#flash', 'Please log in to proceed');

});

test('has a dashboard page for the logged in user', async function(assert) {
    let user = server.create('user', { id: 9000 });

    let session = this.application.__container__.lookup('service:session');
    session.loginUser(user);

    await visit('/dashboard');

    hasText(assert, '#flash', 'Please log in to proceed');

    hasText(assert, '#crates-heading h1', 'My Dashboard');
});
