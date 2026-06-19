-- CreateTable
CREATE TABLE `langs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `active` BOOLEAN NULL DEFAULT false,
    `default_lang` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `headpage_id` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `slug` VARCHAR(255) NULL,
    `lang_code` VARCHAR(20) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `sub_title` VARCHAR(255) NULL,
    `short_description` TEXT NULL,
    `content` TEXT NULL,
    `img_path` VARCHAR(255) NULL,
    `seo_title` VARCHAR(255) NULL,
    `seo_description` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `headpage_id`(`headpage_id`),
    INDEX `lang_code`(`lang_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(500) NULL,
    `lang_code` VARCHAR(20) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `description` VARCHAR(1000) NULL,
    `img_path` TEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `lang_code`(`lang_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`lang_code`) REFERENCES `langs`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`headpage_id`) REFERENCES `pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `slider` ADD CONSTRAINT `slider_ibfk_1` FOREIGN KEY (`lang_code`) REFERENCES `langs`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;
