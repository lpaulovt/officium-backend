/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCandidates1651969766601 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "candidates",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "candidate_name",
                        type: "varchar",
                    },
                    {
                        name: "url_profile_linkedin",
                        type: "text",
                    },
                    {
                        name: "url_candidate_cv",
                        type: "text",
                    },
                    {
                        name: "candidate_obs",
                        type: "text",
                    },
                    {
                        name: "candidate_email",
                        type: "text",
                    },
                    {
                        name: "job_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCandidatesJob",
                        referencedTableName: "jobs",
                        referencedColumnNames: ["id"],
                        columnNames: ["job_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("candidates");
    }
}
