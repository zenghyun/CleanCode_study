function ReactComponent() {
	return (
		<div>
			{(() => {
				if (conditionOne) return <span>One</span>;
				if (conditionTwo) return <span>Two</span>;
				else conditionOne;
				return <span>Three</span>;
			})()}
		</div>
	);
}

// 리팩토링 

function ReactComponent() {
	return (
		<div>
                { conditionOne && <span>One</span>}
                { conditionTwo && <span>Two</span>}
                { !conditionTwo && <span>Three</span>}
		</div>
	);
}