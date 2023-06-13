import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO } from "../../src/dtos/user/login.dto"

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe('Tests no método login do userBusiness', () => {

    test("caso de sucesso, token gerado", async () => {
        
        const input: LoginInputDTO = {
            email: "fulano@email.com",
            password: "fulano123"
        }

        const output = await userBusiness.login(input)

        expect(output.message).toBe("Login realizado com sucesso")
        expect(output.token).toBe('token-mock-fulano')

        expect(output).toEqual(
            {
                message: "Login realizado com sucesso",
                token: "token-mock-fulano"
            }
        )

    })
})