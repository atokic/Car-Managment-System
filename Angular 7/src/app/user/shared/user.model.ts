export class User {
    FullName: string  
    Id: string
    UserName: string
    NormalizedUserName: string
    Email: string
    NormalizedEmail: string
    EmailConfirmed: boolean
    PasswordHash: string
    SecurityStamp: string
    ConcurrencyStamp: string
    PhoneNumber: string
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd: string
    LockoutEnabled: boolean
    AccessFailedCount: number
}