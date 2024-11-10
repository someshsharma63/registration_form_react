import React from 'react'

function Modaldata() {
  return (
   <>
        <div className="modal" tabIndex="-1" id="exampleModal">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Term & Conditions</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<h5>You agree to the following:</h5>
									<ul>
										<li>You have understood the course content.</li>
										<li>You have understood the course duration.</li>
										<li>You have cleared all your doubts regarding the course, the content and the duration and have no problem with it.</li>
										<li>Fees once paid is not refundable.</li>
										<li>In case of uninformed leave, I will not be eligible for a backup.</li>
										<li>7 days or more of leaves without prior permission would result in the termination of my registration.</li>
									</ul>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-success" data-dismiss="modal" id="agreeButton">I agree</button>
								</div>
							</div>
						</div>
					</div>
   </>
  )
}

export default Modaldata