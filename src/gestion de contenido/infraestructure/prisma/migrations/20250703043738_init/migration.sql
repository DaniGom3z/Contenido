-- CreateTable
CREATE TABLE `Autor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `biografia` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Libro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idAutor` INTEGER NOT NULL,
    `titulo` VARCHAR(255) NOT NULL,
    `categoria` VARCHAR(255) NOT NULL,
    `numPaginas` INTEGER NOT NULL,
    `sinopsis` TEXT NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `urlPortada` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Genero_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LibroGenero` (
    `idLibro` INTEGER NOT NULL,
    `idGenero` INTEGER NOT NULL,

    PRIMARY KEY (`idLibro`, `idGenero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReporteLibro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idLibro` INTEGER NOT NULL,
    `descripcion` TEXT NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Libro` ADD CONSTRAINT `Libro_idAutor_fkey` FOREIGN KEY (`idAutor`) REFERENCES `Autor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LibroGenero` ADD CONSTRAINT `LibroGenero_idLibro_fkey` FOREIGN KEY (`idLibro`) REFERENCES `Libro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LibroGenero` ADD CONSTRAINT `LibroGenero_idGenero_fkey` FOREIGN KEY (`idGenero`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReporteLibro` ADD CONSTRAINT `ReporteLibro_idLibro_fkey` FOREIGN KEY (`idLibro`) REFERENCES `Libro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
