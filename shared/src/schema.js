"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertContactMessageSchema = exports.insertUserSchema = exports.contactMessages = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.varchar)("id").primaryKey().default((0, drizzle_orm_1.sql) `gen_random_uuid()`),
    username: (0, pg_core_1.text)("username").notNull().unique(),
    password: (0, pg_core_1.text)("password").notNull(),
});
exports.contactMessages = (0, pg_core_1.pgTable)("contact_messages", {
    id: (0, pg_core_1.varchar)("id").primaryKey().default((0, drizzle_orm_1.sql) `gen_random_uuid()`),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    subject: (0, pg_core_1.text)("subject").notNull(),
    message: (0, pg_core_1.text)("message").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users).pick({
    username: true,
    password: true,
});
exports.insertContactMessageSchema = (0, drizzle_zod_1.createInsertSchema)(exports.contactMessages).omit({
    id: true,
    createdAt: true,
}).extend({
    email: zod_1.z.string().email("Please enter a valid email address"),
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    subject: zod_1.z.string().min(5, "Subject must be at least 5 characters"),
    message: zod_1.z.string().min(10, "Message must be at least 10 characters"),
});
//# sourceMappingURL=schema.js.map