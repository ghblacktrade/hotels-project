import ClientOnly from "@/app/components/client/ClientOnly";
import Container from "@/app/components/container/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function Home() {

    const listings: any = await getListings()
    const currentUser = await getCurrentUser()

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset/>
            </ClientOnly>
        );
    }

  return (
    <ClientOnly>
      <Container>
        <div className='
        pt-24
        grid
        grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        xl:ggrid-cols-5
        2xl:grid-cols-6
        gap-8
        '>
            {listings.map((listing: any) => {
                return (
                    <ListingCard
                        currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                    />
                )
            })}
          <div>My future listings</div>
        </div>
      </Container>

    </ClientOnly>
  )
}

