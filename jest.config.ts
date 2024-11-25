// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.test.ts'], // Define la ubicación de los tests
  coverageDirectory: 'coverage',            // Carpeta de salida para la cobertura de código
  collectCoverage: true,                    // Habilita la cobertura de código
};

export default config;
