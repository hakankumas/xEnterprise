-- CreateTable
CREATE TABLE `page_gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page_id` INTEGER NOT NULL,
    `img_path` TEXT NOT NULL,

    INDEX `page_id`(`page_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `page_gallery` ADD CONSTRAINT `page_gallery_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
