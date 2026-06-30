-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL,
    `icon` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contact_id` INTEGER NOT NULL,
    `label` VARCHAR(255) NOT NULL,
    `href` VARCHAR(255) NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `iframe` TEXT NULL,
    `sort_order` INTEGER NULL,

    INDEX `contact_id`(`contact_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contact_data` ADD CONSTRAINT `contact_data_ibfk_1` FOREIGN KEY (`contact_id`) REFERENCES `contact`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
