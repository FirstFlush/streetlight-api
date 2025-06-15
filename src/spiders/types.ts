interface SpiderRegistryValue {
    key: string;
    url: string;
    label?: string;
}

interface SpiderRegistry {
    records: Record<string, SpiderRegistryValue>
}