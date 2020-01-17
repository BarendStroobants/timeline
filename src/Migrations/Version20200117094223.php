<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117094223 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE event_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE event (id INT NOT NULL, person_id INT NOT NULL, start TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, stop TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, activity VARCHAR(255) NOT NULL, location VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_3BAE0AA7217BBB47 ON event (person_id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7217BBB47 FOREIGN KEY (person_id) REFERENCES person (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE person ADD nickname VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD adress VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD age INT DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD firstname VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD usage VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE event_id_seq CASCADE');
        $this->addSql('DROP TABLE event');
        $this->addSql('ALTER TABLE person DROP nickname');
        $this->addSql('ALTER TABLE person DROP adress');
        $this->addSql('ALTER TABLE person DROP age');
        $this->addSql('ALTER TABLE person DROP name');
        $this->addSql('ALTER TABLE person DROP firstname');
        $this->addSql('ALTER TABLE person DROP usage');
    }
}
