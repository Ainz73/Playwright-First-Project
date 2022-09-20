import { test as myTest } from "@playwright/test"

type fabio = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<fabio>({
    age: 22,
    email: "fabio@example.com"
})

export const it = myFixtureTest;