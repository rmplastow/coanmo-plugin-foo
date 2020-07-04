export class CoAnMoPluginFoo {
  private foo: string;
  constructor (foo = 'foo') {
    console.log(`CoAnMoPluginFoo() is ${foo}`)
    this.foo = foo;
  }
  getFoo () {
    return `${this.foo}!`
  }
}