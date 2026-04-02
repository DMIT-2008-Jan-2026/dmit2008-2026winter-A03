import { useRouter } from 'next/router';

export default function AgencyDetail() {

	const router = useRouter()
	const { agencyId } = router.query

	return <div>Agency: {agencyId}</div>
}
