import Container from "@/components/base/Container"

export default function StatusPage() {
  return (
    <Container noWrapper title="Status Page" description="skep's shit lol">
      <article className="text-center py-8 bg-neutral-500">
        <h1>Status Page</h1>
        <p>
          Contains the services Skep's been running; these are hard coded so
          deal with it lol
        </p>
      </article>
      <div className="grid grid-cols-2 gap-3 mt-5 px-5 mx-auto max-w-screen-xl">
        <StatusItem
          name="Paco Stats API"
          description="A public FastAPI GraphQL server responsible for updating and maintaining drawing data"
        />
        <StatusItem
          name="Searchpets FastAPI"
          description="A FastAPI server for searchpets.xyz; powered by CloudFlare"
          status="Operational"
        />
      </div>
    </Container>
  )
}

export function StatusItem({
  name = "Name",
  description = "Description service",
  status = "Not running"
}: {
  name?: string
  description?: string
  status?:
    | "Operational"
    | "Not running"
    | "Decommissioned"
    | "Temporarily suspended"
}) {
  return (
    <div className="rounded-lg py-3 px-4 flex flex-col border-2 border-neutral-300  bg-neutral-500 select-none">
      <h2>{name}</h2>
      <p className="h-full">{description}</p>
      <hr className="mt-2 border-neutral-400" />
      <div className="flex items-center gap-x-1 py-1">
        <strong
          className={`
              ${status == "Not running" && "bg-red-700"}
              ${status == "Operational" && "bg-green-700"}
              px-2 rounded-md text-sm
            `}
        >
          {status}
        </strong>
      </div>
    </div>
  )
}
