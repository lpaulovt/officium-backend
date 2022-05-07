import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobs1651949061305 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "jobs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "job_title",
                        type: "varchar",
                    },
                    {
                        name: "job_category_name",
                        type: "varchar",
                    },
                    {
                        name: "job_type",
                        type: "varchar",
                    },
                    {
                        name: "is_remote",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "org_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKJobUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["org_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobs");
    }
}
