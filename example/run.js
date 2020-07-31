import React from 'react';
import ReactDOM from "react-dom";
import { Graph } from "../src/index.js";

import Utils from "../src/utils"

let model2 = {
    Name: "System",
    Components: [
        {
            Type: "Source",
            Configuration: "default",
            Name: {
                "name" : "mySource"
                // no index
            },	
            Qualities: {
                "memory_consumption": "1024"
            },
            Ports: {
                Inputs: [],
                Outputs: [
                {
                    Type: "defaultChannel",
                    Name: {
                        "name": "myOutput"
                    }
                }],
                Supports: [
                {
                    Type: "defaultBudget",
                    Name: {
                        "name": "mySupports"
                    }
                }],
                Requires: []
            },
            
            // Only used in case of aggregate component
			AlternativeComponents: [
				{
					"Type": "SmartCameraSub1",
					"Configuration": "SmartCameraNormalMode",
					"Ports": {
						Supports: [
							{
								Type: "defaultBudget",
								Name: {
									"name": "mySupports"
								}
							}],
						"Requires": [],
						"Outputs": [],
						"Inputs": []
					},
					"Qualities": {},
					"Name": {
						"name": "smartCamsub1"
					}
				},
				{
					"Type": "SmartCameraSub2",
					"Configuration": "SmartCameraNormalMode",
					"Ports": {
						Supports: [
							{
								Type: "defaultBudget",
								Name: {
									"name": "mySupports"
								}
							}],
						"Requires": [],
						"Outputs": [],
						"Inputs": []
					},
					"Qualities": {},
					"Name": {
						"name": "smartCamsub2"
					}
				}
			],
			// Only used for links within the aggregate component
            RunsOnLinks: [],
            OutputsToLinks: [],			
        },
        {
            Type: "Sink",
            Configuration: "default",
            Name: {
                "name": "mySink"
            },
            Qualities: {
                "memory_consumption": "2048"
            },
            Ports: {
                Inputs: [{
                    Type: "defaultChannel",
                    Name: {
                        "name": "myInput"
                    }
                }],
                Outputs: [],
                Supports: [
                {
                    Type: "defaultBudget",
                    Name: {
                        "name": "mySupports"
                    }
                }],
                Requires: []
            },
            Subcomponents: [],
            RunsOnLinks: [],
            OutputsToLinks: [],	
        }
    ],
    RunsOnLinks: [		
    ],
    OutputsToLinks: [
        {
            From: {
                componentName:  {
                    "name": "mySource"
                },
                portName: {
                    "name": "myOutput"
                }
            },
            To: {
                componentName: {
                    "name": "mySink"
                },
                portName: {
                    "name": "myInput"
                }
            },
            Qualities: {
                bandwidth: "100",
                isWorking: "true"
            }
        }
    ],
    Qualities: {
        SourceCount: "1",
        SinkCount: "1"		
    }
}

let model = {
	"Components": [{
			"RunsOnLinks": [{
					"Guest": {
						"componentName": {
							"name": "BACPlatform"
						},
						"portName": {
							"name": "imgCap"
						}
					},
					"Host": {
						"componentName": {
							"name": "BACApplication"
						},
						"portName": {
							"name": "imgCap"
						}
					},
					"Parameters": {
						param: "1234"
					}
				}, {
					"Guest": {
						"componentName": {
							"name": "BACPlatform"
						},
						"portName": {
							"name": "imgAna"
						}
					},
					"Host": {
						"componentName": {
							"name": "BACApplication"
						},
						"portName": {
							"name": "imgAna"
						}
					},
					"Qualities": {}
				}, {
					"Guest": {
						"componentName": {
							"name": "BACPlatform"
						},
						"portName": {
							"name": "faceId"
						}
					},
					"Host": {
						"componentName": {
							"name": "BACApplication"
						},
						"portName": {
							"name": "faceId"
						}
					},
					"Qualities": {}
				}, {
					"Guest": {
						"componentName": {
							"name": "BACPlatform"
						},
						"portName": {
							"name": "dbAcc"
						}
					},
					"Host": {
						"componentName": {
							"name": "BACApplication"
						},
						"portName": {
							"name": "dbAcc"
						}
					},
					"Qualities": {}
				}
			],
			"Type": "BACSystem",
			"Configuration": "default",
			"Ports": {
				"Supports": [],
				"Requires": [],
				"Outputs": [],
				"Inputs": []
			},
			"Subcomponents": [{
					"RunsOnLinks": [{
							"Guest": {
								"componentName": {},
								"portName": {
									"name": "imgCap"
								}
							},
							"Host": {
								"componentName": {
									"name": "FaceDetection"
								},
								"portName": {
									"name": "imgCap"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {},
								"portName": {
									"name": "imgAna"
								}
							},
							"Host": {
								"componentName": {
									"name": "FaceDetection"
								},
								"portName": {
									"name": "imgAna"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {},
								"portName": {
									"name": "faceId"
								}
							},
							"Host": {
								"componentName": {
									"name": "FaceRecognition"
								},
								"portName": {
									"name": "faceId"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {},
								"portName": {
									"name": "dbAcc"
								}
							},
							"Host": {
								"componentName": {
									"name": "AccessControl"
								},
								"portName": {
									"name": "dbAcc"
								}
							},
							"Qualities": {}
						}
					],
					"Type": "BACApplication",
					"Configuration": "default",
					"Ports": {
						"Supports": [],
						"Requires": [{
								"Type": "ImageCapture",
								"Name": {
									"name": "imgCap"
								}
							}, {
								"Type": "ImageAnalysis",
								"Name": {
									"name": "imgAna"
								}
							}, {
								"Type": "FaceIdentifiaction",
								"Name": {
									"name": "faceId"
								}
							}, {
								"Type": "Database",
								"Name": {
									"name": "dbAcc"
								}
							}
						],
						"Outputs": [],
						"Inputs": []
					},
					"Subcomponents": [{
							"Type": "FaceDetection",
							"Configuration": "default",
							"Ports": {
								"Supports": [],
								"Requires": [{
										"Type": "ImageCapture",
										"Name": {
											"name": "imgCap"
										}
									}, {
										"Type": "ImageCapture",
										"Name": {
											"name": "imgAna"
										}
									}
								],
								"Outputs": [{
										"Type": "Image",
										"Name": {
											"name": "out"
										}
									}
								],
								"Inputs": []
							},
							"Qualities": {
								"lat": ""
							},
							"Name": {
								"name": "FaceDetection"
							}
						}, {
							"Type": "FaceRecognition",
							"Configuration": "default",
							"Ports": {
								"Supports": [],
								"Requires": [{
										"Type": "FaceIdentifiaction",
										"Name": {
											"name": "faceId"
										}
									}
								],
								"Outputs": [{
										"Type": "ID",
										"Name": {
											"name": "out"
										}
									}
								],
								"Inputs": [{
										"Type": "Image",
										"Name": {
											"name": "inp"
										}
									}
								]
							},
							"Qualities": {
								"lat": "",
								"recQuality": ""
							},
							"Name": {
								"name": "FaceRecognition"
							}
						}, {
							"Type": "AccessControl",
							"Configuration": "default",
							"Ports": {
								"Supports": [],
								"Requires": [{
										"Type": "Database",
										"Name": {
											"name": "dbAcc"
										}
									}
								],
								"Outputs": [],
								"Inputs": [{
										"Type": "ID",
										"Name": {
											"name": "inp"
										}
									}
								]
							},
							"Qualities": {
								"lat": ""
							},
							"Name": {
								"name": "AccessControl"
							}
						}
					],
					"Qualities": {
						"endToEnd": "",
						"recQuality": ""
					},
					"OutputsToLinks": [{
							"From": {
								"componentName": {
									"name": "FaceDetection"
								},
								"portName": {
									"name": "out"
								}
							},
							"To": {
								"componentName": {
									"name": "FaceRecognition"
								},
								"portName": {
									"name": "inp"
								}
							},
							"Qualities": {}
						}, {
							"From": {
								"componentName": {
									"name": "FaceRecognition"
								},
								"portName": {
									"name": "out"
								}
							},
							"To": {
								"componentName": {
									"name": "AccessControl"
								},
								"portName": {
									"name": "inp"
								}
							},
							"Qualities": {}
						}
					],
					"Name": {
						"name": "BACApplication"
					}
				}, {
					"RunsOnLinks": [{
							"Guest": {
								"componentName": {
									"name": "smartCam"
								},
								"portName": {
									"name": "imgCap"
								}
							},
							"Host": {
								"componentName": {},
								"portName": {
									"name": "imgCap"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {
									"name": "smartCam"
								},
								"portName": {
									"name": "imgAna"
								}
							},
							"Host": {
								"componentName": {},
								"portName": {
									"name": "imgAna"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {
									"name": "ComputePlatform"
								},
								"portName": {
									"name": "faceId"
								}
							},
							"Host": {
								"componentName": {},
								"portName": {
									"name": "faceId"
								}
							},
							"Qualities": {}
						}, {
							"Guest": {
								"componentName": {
									"name": "ComputePlatform"
								},
								"portName": {
									"name": "dbAcc"
								}
							},
							"Host": {
								"componentName": {},
								"portName": {
									"name": "dbAcc"
								}
							},
							"Qualities": {}
						}
					],
					"Type": "BACPlatform",
					"Configuration": "default",
					"Ports": {
						"Supports": [{
								"Type": "ImageCapture",
								"Name": {
									"name": "imgCap"
								}
							}, {
								"Type": "ImageAnalysis",
								"Name": {
									"name": "imgAna"
								}
							}, {
								"Type": "FaceIdentifiaction",
								"Name": {
									"name": "faceId"
								}
							}, {
								"Type": "Database",
								"Name": {
									"name": "dbAcc"
								}
							}
						],
						"Requires": [],
						"Outputs": [],
						"Inputs": []
					},
					"Subcomponents": [{
							"Type": "SmartCamera",
							"Configuration": "SmartCameraNormalMode",
							"Ports": {
								"Supports": [{
										"Type": "ImageCapture",
										"Name": {
											"name": "imgCap"
										}
									}, {
										"Type": "ImageAnalysis",
										"Name": {
											"name": "imgAna"
										}
									}, {
										"Type": "FaceIdentifiaction",
										"Name": {
											"name": "faceId"
										}
									}
								],
								"Requires": [],
								"Outputs": [],
								"Inputs": []
							},
							"Qualities": {},
							"Name": {
								"name": "smartCam"
							},
							AlternativeComponents: [
								{
									"Type": "SmartCameraNormalMode",
									"Configuration": "SmartCameraNormalMode",
									"Ports": {
										"Supports": [{
											"Type": "ImageCapture",
											"Name": {
												"name": "imgCap"
											}
										}, {
											"Type": "ImageAnalysis",
											"Name": {
												"name": "imgAna"
											}
										}, {
											"Type": "FaceIdentifiaction",
											"Name": {
												"name": "faceId"
											}
										}
										],
										"Requires": [],
										"Outputs": [],
										"Inputs": []
									},
									"Qualities": {},
									"Name": {
										"name": "SmartCameraNormalMode"
									}
								},
								{
									"Type": "SmartCameraAdvancedMode",
									"Configuration": "SmartCameraAdvancedMode",
									"Ports": {
										"Supports": [{
											"Type": "ImageCapture",
											"Name": {
												"name": "imgCap"
											}
										}, {
											"Type": "ImageAnalysis",
											"Name": {
												"name": "imgAna"
											}
										}, {
											"Type": "FaceIdentifiaction",
											"Name": {
												"name": "faceId"
											}
										}
										],
										"Requires": [],
										"Outputs": [],
										"Inputs": []
									},
									"Qualities": {},
									"Name": {
										"name": "SmartCameraAdvancedMode"
									}
								}
							]
						}, {
							"Type": "ComputePlatform",
							"Configuration": "CloudComputePlatform",
							"Ports": {
								"Supports": [{
										"Type": "FaceIdentifiaction",
										"Name": {
											"name": "faceId"
										}
									}, {
										"Type": "Database",
										"Name": {
											"name": "dbAcc"
										}
									}
								],
								"Requires": [],
								"Outputs": [],
								"Inputs": []
							},
							"Qualities": {},
							"Name": {
								"name": "ComputePlatform"
							},
							AlternativeComponents: [
								{
									"Type": "CloudComputePlatform",
									"Configuration": "CloudComputePlatform",
									"Ports": {
										"Supports": [{
											"Type": "FaceIdentifiaction",
											"Name": {
												"name": "faceId"
											}
										}, {
											"Type": "Database",
											"Name": {
												"name": "dbAcc"
											}
										}
									],
											"Requires": [],
										"Outputs": [],
										"Inputs": []
									},
									"Qualities": {},
									"Name": {
										"name": "CloudComputePlatform"
									}
								},
								{
									"Type": "LocalComputePlatform",
									"Configuration": "LocalComputePlatform",
									"Ports": {
										"Supports": [{
											"Type": "FaceIdentifiaction",
											"Name": {
												"name": "faceId"
											}
										}, {
											"Type": "Database",
											"Name": {
												"name": "dbAcc"
											}
										}
									],
											"Requires": [],
										"Outputs": [],
										"Inputs": []
									},
									"Qualities": {},
									"Name": {
										"name": "LocalComputePlatform"
									}
								}
							]
						}
					],
					"Qualities": {
					},
					"Parameters": {
						"fr": ""
					},
					"Name": {
						"name": "BACPlatform"
					}
				}
			],
			"Qualities": {
				"endToEnd": "",
				"cp": "",
				"recQuality": ""
			},
			"Parameters": {
				"fr": "",
			},
			"Name": {
				"name": "BACSystem"
			}
		}
	],
	"Qualities": {},
	"Name": "System"
}


Utils.doRunOn("root", model)

var getLayoutButton = document.getElementById('getLayoutButton')
var applyLayoutButton = document.getElementById('applyLayoutButton')

var layout

getLayoutButton.addEventListener("click", ()=>{
	layout = Utils.getLayout()
})

applyLayoutButton.addEventListener("click", ()=>{
	Utils.applyLayout(layout)
})

autoLayoutButton.addEventListener("click", ()=>{
	Utils.autoLayout(layout)
})

// let container = document.getElementById('root');
// ReactDOM.render(<Graph model={model} />, container);
