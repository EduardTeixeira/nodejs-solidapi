import { User } from '../../entities/User';
import { IUsersRepository } from './../IUsersRepository';

// implementação da conexão com o banco de dados
// por enquanto usando apenas uma variável local para simular um banco de dados
export class PostgresUsersRepository implements IUsersRepository {

    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {

        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

}