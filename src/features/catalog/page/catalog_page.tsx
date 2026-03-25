import { usePerfumes } from "../../../shared/hooks/usePerfumes";
import CatalogBanner from "../components/catalog_banner";
import FiltersSidebar from "../components/filters_side_bar";
import ProductGrid from "../components/product_grid";


export function CatalogPage() {
    const {
        perfumes,
        total,
        page,
        limit,
        loading,
        setPage,
        search,
        setSearch
    } = usePerfumes();

    return (
        <div className="bg-white min-h-screen">
            <CatalogBanner />
            <section className="container mx-auto px-6 py-10 flex gap-8">
                <FiltersSidebar />
                <ProductGrid 
                    perfumes={perfumes}
                    total={total}
                    page={page}
                    limit={limit}
                    setPage={setPage}
                    search={search}
                    setSearch={setSearch}
                    loading={loading} />
            </section>
        </div>
    );
}