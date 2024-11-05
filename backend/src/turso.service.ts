import { createClient } from '@libsql/client';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
    private client;

    constructor(private configService: ConfigService) {
        this.client = createClient({
            url: this.configService.get<string>('TURSO_DATABASE_URL'),
            authToken: this.configService.get<string>('TURSO_TOKEN'),
        });
    }

    async saveUser(username: string, email: string, password: string) {
        const query = `
            INSERT INTO user_registrations (username, email, password)
            VALUES (?, ?, ?);
        `;
        try {
            const result = await this.client.execute({
                sql: query,
                args: [username, email, password],
            });
            console.log("User saved:", result);
            return { message: "User registered successfully" };
        } catch (error) {
            console.error("Error saving user:", error);
            throw error;
        }
    }
}
