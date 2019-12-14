There is a third type of query with react testing library, any guesses as to what it is?

it's find! And instead of returning null or throwing when it doesn't find something, it `rejects`!

So... that means `find` returns a promise!

Let's refactor our test to use find instead.

Since we're going to be using `await`, we'll have to make the test `async`

Now that we have our test updated, let's look at the terminal.

If you noticed since there is no `purple circle` in the dom, the purple circle query kept running.

That's because the find api actually runs for 4.5 seconds. It's been to use find for things that are going to appear later

So let's change back our finds into `gets`, and add back our `queryByLabelText`

Now looking at the terminal, we can see that our tests are passing again.

Let's look at app.js, because logic was introduced where the `useShapes` hook can delay the return of our shapes.

If you see the second parameter of `useShapes`, it actually accepts a timeout variable! And that defaults to 0 in App's
default props, so since we neglected to provide a timeout prop, it was ok because App was able to fallback to defaultProps.

But now let's introduce a timeout to the App component.

```js
const { getByLabelText, queryByLabelText } = render(<App timeout={30} />)
```

Now our test is failing! But we still want to cover the case where we don't provide a timeout, so let's introduce another
test that will handle when App has a timeout. Let's first delete the timeout={30} in our original test.

Let's have you implement this test.

Your instructions are to

```js
// First, write an additional test that adds a timeout to the App component of 30 ms.
// Second, in that test, assert that red and blue circles appear, and that there is no purple circle.
```

You can find the link to the codesandbox in the video's notes
