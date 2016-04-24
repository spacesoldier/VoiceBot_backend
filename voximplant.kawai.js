(function() {
    var n = this, i = function() {};
    if (function(t, n) {
        var i = "VI_WEBRTC_STATE_IDLE", o = "VI_WEBRTC_STATE_WS_CONNECTING", s = "VI_WEBRTC_STATE_WS_CONNECTED", a = "VI_WEBRTC_STATE_WS_CONNECTED", r = t.VI_CALL_STATE_ALERTING = "ALERTING", c = t.VI_CALL_STATE_PROGRESSING = "PROGRESSING", l = t.VI_CALL_STATE_CONNECTED = "CONNECTED", d = t.VI_CALL_STATE_ENDED = "ENDED", h = 6e3, u = 1e4;
        t.ZingayaAPI = function(t, f) {
            function p(e) {
                return Z && (e.sdp = e.sdp.replace(/(a=mid:video.*\r\n)/g, "$1b=AS:" + Z + "\r\n")), 
                e;
            }
            function C() {
                K && (clearTimeout(K), K = null, J = setTimeout(Me, w));
            }
            var m, g, v, y, S, R, T, I, E, M, w = 3e4, O = [], A = [], P = !1 !== f, b = function() {
                return O.length ? O.pop() : document.createElement("audio");
            }, N = function(e) {
                g(e, null), O.push(e);
            }, U = function() {
                return A.length ? A.pop() : document.createElement("video");
            }, _ = function(e) {
                g(e, null), A.push(e);
            }, L = function(e) {
                if (e) {
                    if (e.audioTracks) return e.audioTracks;
                    if (e.getAudioTracks) return e.getAudioTracks();
                }
                return null;
            }, F = function(e) {
                if (e) {
                    if (e.videoTracks) return e.videoTracks;
                    if (e.getVideoTracks) return e.getVideoTracks();
                }
                return null;
            }, D = function(e, t) {
                if (e) for (var n in e) e[n].enabled = t;
            }, z = function(e, t, n) {
                var i = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                return i ? new Promise(function(t, n) {
                    i.call(navigator, e, t, n);
                }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
            }, V = t === !0, x = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: V
            }, k = "wss", H = null, W = i, X = [], j = !1, G = !1, B = !0, q = null, J = null, K = null, $ = 1, Z = null;
            this.setVideoBandwidth = function(e) {
                Z = e;
            };
            var Y, Q, ee = function() {
                S = "undefined" != typeof webkitRTCPeerConnection, R = "undefined" != typeof mozRTCPeerConnection, 
                T = "undefined" != typeof MediaStreamTrack && "undefined" != typeof MediaStreamTrack.getSources || navigator.mediaDevices && navigator.mediaDevices.enumerateDevices, 
                I = null, E = null, M = null, navigator.mediaDevices === n && (navigator.mediaDevices = {}), 
                navigator.mediaDevices.getUserMedia === n && (navigator.mediaDevices.getUserMedia = z), 
                R && (y = mozRTCIceCandidate, v = mozRTCPeerConnection, m = navigator.mozGetUserMedia.bind(navigator), 
                g = function(e, t) {
                    t ? (e.mozSrcObject = t, e.load(), e.play()) : (e.mozSrcObject = null, e.load());
                }), S ? (v = webkitRTCPeerConnection, y = RTCIceCandidate, m = navigator.webkitGetUserMedia.bind(navigator), 
                g = function(e, t) {
                    t ? (e.src = URL.createObjectURL(t), e.load(), e.play()) : e.pause();
                }) : "undefined" != typeof AdapterJS && (v = window.RTCPeerConnection, y = window.RTCIceCandidate, 
                m = navigator.getUserMedia.bind(navigator), g = window.attachMediaStream);
            }, te = null, ne = {}, ie = {}, oe = 0, se = function(e) {
                "function" == typeof this.writeLog && this.writeLog(e);
            }.bind(this), ae = function(e) {
                "function" == typeof this.writeTrace && this.writeTrace(e);
            }.bind(this), re = function(e) {
                return W != a ? (se(e + " called while in state " + W), !1) : !0;
            }, ce = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                timeZone: "UTC"
            };
            this.writeLog = function(e) {
                console.log("VI WebRTC: " + new Date().toLocaleTimeString("en-US", ce) + " " + e);
            }, this.writeTrace = function(e) {
                console.log("VI WebRTC: " + new Date().toLocaleTimeString("en-US", ce) + " " + e);
            }, this.onConnectionEstablished = null, this.onConnectionFailed = null, this.onConnectionClosed = null, 
            this.onLoginSuccessful = null, this.onLoginFailed = null, this.onIncomingCall = null, 
            this.onCallRinging = null, this.onCallMediaStarted = null, this.onCallConnected = null, 
            this.onCallEnded = null, this.onCallFailed = null, this.onSIPInfoReceived = null, 
            this.onInstantMessageReceived = null, this.onTransferComplete = null, this.onTransferFailed = null, 
            this.onNetStatsReceived = null, this.onRTCStatsCollected = null, this.onHandleRoster = null, 
            this.onHandleRosterPresence = null, this.onHandleMessage = null, this.onHandleSelfPresence = null, 
            this.onHandleChatState = null, this.onHandleMessageEvent = null, this.onHandleMessageRemoved = null, 
            this.onHandleMessageModified = null, this.onHandleMessageModificationError = null, 
            this.onHandleSubscription = null, this.onHandleRosterItem = null, this.onCallRemoteFunctionError = null, 
            this.onIMError = null, this.onIMRosterError = null, this.onMUCError = null, this.onMUCRoomCreation = null, 
            this.onMUCSubject = null, this.onMUCInfo = null, this.onMUCMessage = null, this.onMUCInvitation = null, 
            this.onMUCInviteDecline = null, this.onMUCParticipantPresence = null, this.onMUCNewParticipant = null, 
            this.onMUCParticipantExit = null, this.onMUCOperationResult = null, this.onMUCRooms = null, 
            this.onMUCParticipants = null, this.onMUCBanList = null, this.onMUCHistory = null, 
            this.onMUCMessageModified = null, this.onMUCMessageModificationError = null, this.onMUCMessageRemoved = null, 
            this.onMUCChatState = null, this.onHistory = null, this.onUCConnected = null, this.onUCDisconnected = null, 
            this.onVoicemail = null, this.onCheckComplete = null, this.onRemoteScreenCaptureStarted = null, 
            this.onCallICETimeout = null;
            var le = function(e, t) {
                "function" == typeof this.onRTCStatsCollected && this.onRTCStatsCollected(e, t);
            }.bind(this), de = function(e, t) {
                "function" == typeof this.onRemoteScreenCaptureStarted && this.onRemoteScreenCaptureStarted(e, t);
            }.bind(this), he = function(e) {
                "function" == typeof this.onCallICETimeout && this.onCallICETimeout(e);
            }.bind(this), ue = function(e) {
                var t = {};
                for (var n in e) "X-" != n.substring(0, 2) && "VI-CallData" != n || (t[n] = e[n]);
                return t;
            }, fe = function(e) {
                for (var t in e) if ("X-DirectCall" == t) return "true" == e[t];
                return !1;
            }, pe = function() {
                oe = 0;
                for (var e in ne) oe++;
            }, Ce = function(e) {
                ne[e.id()] = e, pe();
            }, me = function(e) {
                delete ne[e], pe();
            }.bind(this);
            ee();
            var ge = function(e) {
                for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; e > i; i++) t += n.charAt(Math.floor(Math.random() * n.length));
                return t;
            }, ve = function() {};
            this.muteMicrophone = function(e) {
                j = e, te && D(L(te), !e);
            }, this.sendVideo = function(e) {
                B = e, te && D(F(te), e);
            }, this.mutePlayback = function(e) {
                G = e;
                for (var t in ie) ie[t].updateSpeakerMuteState();
            }, this.setPlaybackVolume = function(e) {
                $ = e;
                for (var t in ie) ie[t].setPlaybackVolume(e);
            }, this.getCalls = function() {
                var e = [];
                for (var t in ne) e.push(t);
                return e;
            }, this.setLocalVideoSink = function(e) {
                Y = e, te && g(e, te);
            }, this.setRemoteSinksContainerId = function(e) {
                Q = e;
            }, this.stopLocalStream = function() {
                te && (te.active && te.getTracks().forEach(function(e) {
                    e.stop();
                }), te = null);
            }.bind(this), this.destroy = function() {
                this.disconnect(), this.stopLocalStream();
            }.bind(this), this.disconnect = function() {
                H && (Ee(), H.onclose = null, H.close(), Re());
            }, this.useAudioSource = function(e, t, n) {
                T && (I = e, this.requestMedia(V, t, n, !0));
            }.bind(this), this.useVideoSource = function(e, t, n) {
                T && (E = e, this.requestMedia(!0, t, n, !0));
            }.bind(this), this.setConstraints = function(e, t, n, i) {
                M = e, i === !0 && this.requestMedia(V, t, n, V);
            }.bind(this), this.requestMedia = function(e, t, n, i) {
                var o, s = navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && "undefined" == typeof MediaStreamTrack && "undefined" == typeof MediaStreamTrack.getSources ? "deviceId" : "sourceId";
                null === I && null === E ? o = {
                    audio: !0,
                    video: e === !0
                } : null !== I && null !== E ? o = "sourceId" == s ? {
                    audio: {
                        mandatory: {
                            sourceId: I
                        }
                    },
                    video: {
                        mandatory: {
                            sourceId: E
                        }
                    }
                } : {
                    audio: {
                        deviceId: {
                            exact: I
                        }
                    },
                    video: {
                        deviceId: {
                            exact: E
                        }
                    }
                } : null !== I ? o = "sourceId" == s ? {
                    audio: {
                        mandatory: {
                            sourceId: I
                        }
                    },
                    video: e === !0
                } : {
                    audio: {
                        deviceId: {
                            exact: I
                        }
                    },
                    video: e === !0
                } : null !== E && (o = "sourceId" == s ? {
                    audio: !0,
                    video: {
                        mandatory: {
                            sourceId: E
                        }
                    }
                } : {
                    audio: !0,
                    video: {
                        deviceId: {
                            exact: E
                        }
                    }
                }), null !== M && (S ? M !== !1 ? o.video = {} : o.video = !1 : o.video = M, "undefined" != typeof M.mandatory && (o.video.mandatory = M.mandatory), 
                "undefined" != typeof M.optional ? (o.video.optional = M.optional, null !== E && ("sourceId" == s ? o.video.mandatory.sourceId = E : o.video.deviceId = {
                    exact: E
                })) : null !== E && ("sourceId" == s ? o.video.mandatory.sourceId = E : o.video.deviceId = {
                    exact: E
                })), te && i && this.stopLocalStream(), "undefined" != typeof o.video.mandatory && "undefined" != typeof o.video.mandatory.chromeMediaSourceId && (o.audio = !1), 
                navigator.mediaDevices.getUserMedia(o).then(function(e) {
                    this.gUM_success(e, t);
                }.bind(this))["catch"](function(e) {
                    this.gUM_error(e, n);
                }.bind(this));
            }.bind(this), this.gUM_error = function(e, t) {
                se("Media access rejected: " + e.name), "function" == typeof t && t(e.name);
            }.bind(this), this.gUM_success = function(e, t) {
                var n;
                if (te) {
                    te.active && te.getTracks().forEach(function(e) {
                        e.stop();
                    });
                    for (n in ie) ie[n].setLocalStream(null);
                }
                se("Media access granted"), te = e, D(L(te), !j), Y && g(Y, e);
                for (n in ie) ie[n].setLocalStream(te);
                "function" == typeof t && t(te);
                for (n in we) Oe(n, we[n]);
                we = {};
            }.bind(this), this.shareScreen = function() {
                "undefined" != typeof getScreenId ? getScreenId(function(e, t, n) {
                    m(n, function(e) {
                        q = e;
                        for (var t in ie) ie[t].isDirect() && ie[t].addScreenSharing(q);
                    }, function(e) {
                        se(e);
                    });
                }) : se("No screensharing extension is available");
            }, this.getRemoteParty = function(e) {
                return ne[e] ? ne[e].getRemoteParty() : null;
            }, this.getCallState = function(e) {
                return ne[e] ? ne[e].getState() : null;
            }, this.setCallActive = function(e, t) {
                return ne[e] ? (t ? this.unholdCall(e) : this.holdCall(e), ne[e].setStreamsActive(t)) : void 0;
            }, this.isCallActive = function(e) {
                return ne[e] ? ne[e].streamsAreActive() : !1;
            }, this.connectTo = function(e, t, n, s, a) {
                if (W == i) try {
                    var r = R ? "firefox" : "chrome";
                    "undefined" != typeof a && 0 == a && (r = "voxmobile"), H = new WebSocket(k + "://" + e + "/" + (s || "platform") + "?version=2&client=" + r + "&referrer=" + encodeURIComponent(t) + "&extra=" + encodeURIComponent(n) + "&video=" + (V === !0 ? "true" : "false") + "&q=" + ge(12)), 
                    W = o, H.onopen = Ie, H.onclose = Ee, H.onerror = Te, H.onmessage = be;
                } catch (c) {
                    se("WebSocket Error: " + c);
                } else se("Error: called connectTo while in state " + W);
            }.bind(this), this.startPreFlightCheck = function(e, t) {
                re("__startPreFlightCheck") && Le("__startPreFlightCheck", [ !!e, !!t ]);
            }, this.login = function(e, t, n) {
                re("login") && Le("login", [ e, t, n ? n : null ]);
            }, this.loginStage2 = function(e, t, n) {
                re("loginStage2") && Le("loginStage2", [ e, t, n ? n : null ]);
            }, this.loginGenerateOneTimeKey = function(e) {
                re("loginGenerateOneTimeKey") && Le("loginGenerateOneTimeKey", [ e ]);
            }, this.loginUsingOneTimeKey = function(e, t, n) {
                re("loginUsingOneTimeKey") && Le("loginUsingOneTimeKey", [ e, t, n ? n : null ]);
            }, this.setOperatorACDStatus = function(e) {
                re("setOperatorACDStatus") && Le("setOperatorACDStatus", [ e ]);
            }, this.callTo = function(e, t, n, i) {
                var o = ge(36), s = !("undefined" != typeof i && i.wiredRemote === !1), n = ue("undefined" == typeof n ? {} : n), a = new Ue(o, c, e, "");
                if (a.setHeaders(n), Ce(a), fe(n)) {
                    var r = Ae(o, !0, s);
                    r.outgoingCall();
                } else Le("createCall", [ -1, e, t, o, null, null, n, i ]);
                return o;
            }, this.transferCall = function(e, t) {
                for (var n = [ e, t ], i = 0; i < n.length; i++) {
                    var o = ne[n[i]];
                    if (!o) return void se("ERROR: trying to transfer unknown call " + o.id());
                    if (o.getState() != l) return void se("ERROR: trying to transfer call " + o.id() + " in state " + o.getState());
                }
                Le("transferCall", [ e, t ]);
            }, this.hangupCall = function(e, t) {
                var n = ne[e];
                n ? n.getState() == r ? Le("rejectCall", [ e, !0, ue(t) ]) : Le("disconnectCall", [ e, ue(t) ]) : se("ERROR: trying to hangup unknown call " + e);
            }, this.rejectCall = function(e, t, n) {
                var i = ne[e];
                i ? i.getState() == r ? Le("rejectCall", [ e, !0, ue(n) ]) : se("ERROR: trying to reject call " + e + " in state " + i.getState()) : se("ERROR: trying to reject unknown call " + e);
            }, this.answerCall = function(e, t) {
                var n = ne[e];
                if (n) if (n.getState() == r) if (fe(n.getHeaders())) {
                    var i = n.getPeerConnection();
                    i.createAnswer();
                } else Le("acceptCall", [ e, ue(t) ]); else se("ERROR: trying to answer call " + e + " in state " + n.getState()); else se("ERROR: trying to answer unknown call " + e);
            }, this.sendDigit = function(e, t) {
                var n = ne[e];
                n ? n.getState() == l ? Le("sendDTMF", [ e, t ]) : se("ERROR: trying to send digit to call " + e + " in state " + n.getState()) : se("ERROR: trying to send digit to unknown call " + e);
            }, this.holdCall = function(e) {
                var t = ne[e];
                t ? t.getState() == l ? Le("hold", [ e ]) : se("ERROR: trying to hold call " + e + " in state " + t.getState()) : se("ERROR: trying to hold unknown call " + e);
            }, this.unholdCall = function(e) {
                var t = ne[e];
                t ? t.getState() == l ? Le("unhold", [ e ]) : se("ERROR: trying to unhold call " + e + " in state " + t.getState()) : se("ERROR: trying to unhold unknown call " + e);
            }, this.voicemailPromptFinished = function(e) {
                var t = ne[e];
                t ? Le("promptFinished", [ e ]) : se("ERROR: trying to record voicemail for unknown call " + e);
            }, this.sendSIPInfo = function(e, t, n, i, o) {
                var s = ne[e];
                s ? s.getState() == l || s.getState() == r || s.getState() == c ? Le("sendSIPInfo", [ e, t, n, i, ue(o) ]) : se("ERROR: trying to send SIP Info to call " + e + " in state " + s.getState()) : se("ERROR: trying to send SIP Info to unknown call " + e);
            };
            var ye = this.sendSIPInfo.bind(this);
            this.setDesiredVideoBandwidth = function(e) {
                re("setDesiredVideoBandwidth") && Le("setDesiredVideoBandwidth", [ e ]);
            }, this.sendInstantMessage = function(e, t) {
                this.sendSIPInfo(e, "application", "zingaya-im", t, {});
            }, this.sendTextMessage = function(e, t, n) {
                re("sendMessage") && Le("sendMessage", [ e, t, n ]);
            }, this.editTextMessage = function(e, t, n) {
                re("editMessage") && Le("editMessage", [ e, t, n ]);
            }, this.removeTextMessage = function(e, t) {
                re("removeMessage") && Le("removeMessage", [ e, t ]);
            }, this.sendStatus = function(e, t) {
                re("sendStatus") && Le("sendStatus", [ e, t ]);
            }, this.sendChatState = function(e, t) {
                re("sendChatState") && Le("sendChatState", [ e, t ]);
            }, this.raiseMessageEvent = function(e, t, n) {
                re("raiseMessageEvent") && Le("raiseMessageEvent", [ e, t, n ]);
            }, this.addRoster = function(e, t, n, i) {
                re("addRoster") && Le("addRoster", [ e, t, n, i ]);
            }, this.addRosterItemGroup = function(e, t) {
                re("addRosterItemGroup") && Le("addRosterItemGroup", [ e, t ]);
            }, this.delRosterItemGroup = function(e, t) {
                re("delRosterItemGroup") && Le("delRosterItemGroup", [ e, t ]);
            }, this.moveRosterItemGroup = function(e, t, n) {
                re("moveRosterItemGroup") && Le("moveRosterItemGroup", [ e, t, n ]);
            }, this.renameRosterItem = function(e, t) {
                re("renameRosterItem") && Le("renameRosterItem", [ e, t ]);
            }, this.removeRoster = function(e) {
                re("removeRoster") && Le("removeRoster", [ e ]);
            }, this.replySubscriptionRequest = function(e, t) {
                re("replySubscriptionRequest") && Le("replySubscriptionRequest", [ e, t ]);
            }, this.joinMUC = function(e, t, n) {
                re("joinMUC") && Le("joinMUC", [ e, t, n ]);
            }, this.leaveMUC = function(e, t) {
                re("leaveMUC") && Le("leaveMUC", [ e, t ]);
            }, this.sendMUCMessage = function(e, t, n) {
                re("sendMUCMessage") && Le("sendMUCMessage", [ e, t, n ]);
            }, this.editMUCMessage = function(e, t, n) {
                re("editMUCMessage") && Le("editMUCMessage", [ e, t, n ]);
            }, this.removeMUCMessage = function(e, t) {
                re("removeMUCMessage") && Le("removeMUCMessage", [ e, t ]);
            }, this.inviteMUC = function(e, t, n) {
                re("inviteMUC") && Le("inviteMUC", [ e, t, n ]);
            }, this.declineMUCinvitation = function(e, t, n) {
                re("declineMUCinvitation") && Le("declineMUCinvitation", [ e, t, n ]);
            }, this.ucReconnect = function() {
                re("ucReconnect") && Le("ucReconnect", []);
            }, this.requestHistory = function(e, t, n, i) {
                "undefined" == typeof n && (n = !1), "undefined" == typeof i && (i = 100), "undefined" == typeof t && (t = ""), 
                re("requestHistory") && Le("requestHistory", [ e, t, n, i ]);
            }, this.requestMUCHistory = function(e, t, n, i) {
                "undefined" == typeof n && (n = !1), "undefined" == typeof i && (i = 100), "undefined" == typeof t && (t = ""), 
                re("requestMUCHistory") && Le("requestMUCHistory", [ e, t, n, i ]);
            }, this.setSubject = function(e, t) {
                re("setSubject") && Le("setSubject", [ e, t ]);
            }, this.sendMUCChatState = function(e, t) {
                re("sendMUCChatState") && Le("sendMUCChatState", [ e, t ]);
            }, this.kickMUCUser = function(e, t, n) {
                re("kickMUCUser") && Le("kickMUCUser", [ e, t, n ]);
            }, this.banMUCUser = function(e, t, n) {
                re("banMUCUser") && Le("banMUCUser", [ e, t, n ]);
            }, this.unbanMUCUser = function(e, t, n) {
                re("unbanMUCUser") && Le("unbanMUCUser", [ e, t, n ]);
            }, this.getVideoElementId = function(e) {
                var t = ne[e];
                return t ? t.getVideoElementId() : void se("ERROR: No such call " + e);
            }, this.getAudioElementId = function(e) {
                var t = ne[e];
                return t ? t.getAudioElementId() : void se("ERROR: No such call " + e);
            }, this.getStats = function(e, t) {
                var n = ie[e];
                n && n.getStats(t);
            }, this.getPeerConnection = function(e) {
                return ie[e];
            };
            var Se, Re = function() {
                for (var e in ie) ie[e].close();
                ie = {}, ne = {}, oe = 0, J && clearTimeout(J), K && clearTimeout(K);
            }, Te = function(e) {
                H.onclose = null, se("WS error: " + e);
                var t = W == a, n = t ? this.onConnectionClosed : this.onConnectionFailed;
                W = i, Re(), "function" == typeof n && n(e);
            }.bind(this), Ie = function() {
                W = s, se("WS connected");
            }.bind(this), Ee = function() {
                se("WS closed");
                var e = W == a, t = e ? this.onConnectionClosed : this.onConnectionFailed;
                W = i, Re(), "function" == typeof t && t("Connection closed");
            }.bind(this), Me = function() {
                J = null, Le("__ping", []), K = setTimeout(function() {
                    if (oe > 0) return void C();
                    K = null, se("WS closed");
                    var e = W == a, t = e ? this.onConnectionClosed : this.onConnectionFailed;
                    W = i, Re(), "function" == typeof t && t("Connection closed");
                }.bind(this), w);
            }.bind(this), we = {}, Oe = function(e, t) {
                var n = Ae(e, !1);
                n.start(t);
            }, Ae = function(e, t, n) {
                console.log("createPeerConnection2 invoked"), ie[e] && ie[e].close();
                var i = new _e(e, t, n);
                ne[e] && i.setStreamsActive(ne[e].streamsAreActive()), ie[e] = i, i.setLocalStream(te), 
                q && i.setScreenSharingStream(q);
                var o = ne[e];
                return o && (ne[e].setPeerConnection(i), i.setCall(o)), ie[e];
            }, Pe = null;
            Se = {
                __createConnection: function() {
                    W == s && (W = a, "function" == typeof this.onConnectionEstablished && this.onConnectionEstablished(!1), 
                    J = setTimeout(Me, w));
                },
                __createPC: function(e, t) {
                    !P || te || "__default" == e ? Oe(e, t) : we[e] = t;
                },
                __destroyPC: function(e) {
                    ie[e] && (ie[e].close(), delete ie[e]), delete we[e];
                },
                __onPCStats: function(e, t) {
                    ie[e] && "function" == typeof this.onNetStatsReceived && this.onNetStatsReceived(t);
                },
                __pong: function() {
                    C();
                },
                __connectionSuccessful: function() {
                    W == s && (W = a, "function" == typeof this.onConnectionEstablished && this.onConnectionEstablished(!0), 
                    J = setTimeout(Me, w));
                },
                loginSuccessful: function(e, t) {
                    t && (Pe = t.iceConfig), "function" == typeof this.onLoginSuccessful && this.onLoginSuccessful(e, t);
                },
                loginFailed: function(e, t) {
                    "function" == typeof this.onLoginFailed && this.onLoginFailed({
                        errorCode: e,
                        oneTimeKey: t
                    });
                },
                handleConnectionConnected: function(e, t, n) {
                    var i = ne[e];
                    if (i) if (i.canStartSendingCandidates(), i.getState() == c || i.getState() == r) {
                        if (i.setState(l), "undefined" == typeof n) ; else {
                            var o = i.getPeerConnection();
                            o.onConnectionConnected(n);
                        }
                        "function" == typeof this.onCallConnected && this.onCallConnected(e, t);
                    } else se("WARNING: received handleConnectionConnected for call: " + e + " in invalid state: " + i.getState()); else se("WARNING: received handleConnectionConnected for unknown call: " + e);
                },
                stopRinging: function(e) {
                    var t = ne[e];
                    t ? (t.canStartSendingCandidates(), "function" == typeof this.onCallMediaStarted && this.onCallMediaStarted(e)) : se("WARNING: received stopRinging for unknown call: " + e);
                },
                handleConnectionDisconnected: function(e, t) {
                    var n = ne[e];
                    n ? (n.setState(d), "function" == typeof this.onCallEnded && this.onCallEnded(e, t), 
                    me(e)) : se("WARNING: received handleConnectionDisconnected for unknown call: " + e);
                },
                handleConnectionFailed: function(e, t, n, i) {
                    var o = ne[e];
                    o ? o.getState() == c ? (o.setState(d), "function" == typeof this.onCallFailed && this.onCallFailed(e, t, n, i), 
                    me(e)) : se("WARNING: received handleConnectionFailed for call: " + e + " in invalid state: " + o.getState()) : se("WARNING: received handleConnectionFailed for unknown call: " + e);
                },
                handleRingOut: function(e) {
                    var t = ne[e];
                    t ? (t.canStartSendingCandidates(), t.getState() == c ? "function" == typeof this.onCallRinging && this.onCallRinging(e) : se("WARNING: received handleRingOut for call: " + e + " in invalid state: " + t.getState())) : se("WARNING: received handleRingOut for unknown call: " + e);
                },
                handleIncomingConnection: function(e, t, n, i, o) {
                    var s = new Ue(e, r, t, n);
                    if (s.setHeaders(i), Ce(s), fe(i)) {
                        var a = Ae(e, !0);
                        a.onIncomingCall(o);
                    } else ie[e] && s.setPeerConnection(ie[e]);
                    "function" == typeof this.onIncomingCall ? this.onIncomingCall(e, t, n, i) : (this.rejectCall(e, 486), 
                    se("WARNING: Received incoming call while no handler was specified"));
                },
                handleSIPInfo: function(e, t, n, i, o) {
                    var s = ne[e];
                    if (s) if (s.getState() == l || s.getState() == c || s.getState() == r) if ("application" == t && "zingaya-im" == n) "function" == typeof this.onInstantMessageReceived && this.onInstantMessageReceived(e, i); else if ("voximplant" == t && "sdpfrag" == n) {
                        cands = JSON.parse(i);
                        var a = s.getPeerConnection();
                        for (var d in cands) a.addRemoteCandidate(cands[d][0], cands[d][1]);
                    } else if ("vi" == t && "sdpoffer" == n) {
                        var a = s.getPeerConnection();
                        a.setRemoteSDP(!0, i, o["X-ScreenStreamId"]);
                    } else if ("vi" == t && "sdpanswer" == n) {
                        var a = s.getPeerConnection();
                        a.setRemoteSDP(!1, i, o["X-ScreenStreamId"]);
                    } else "function" == typeof this.onSIPInfoReceived && this.onSIPInfoReceived(e, t + "/" + n, i, o); else se("WARNING: received handleSIPInfo for call: " + e + " in invalid state: " + s.getState()); else se("WARNING: received handleSIPInfo for unknown call: " + e);
                },
                handleSipEvent: function() {},
                handleTransferStarted: function() {},
                handleTransferComplete: function(e) {
                    var t = ne[e];
                    t ? this.onTransferComplete && this.onTransferComplete(e) : se("WARNING: received handleTransferComplete for unknown call: " + e);
                },
                handleTransferFailed: function(e) {
                    var t = ne[e];
                    t ? this.onTransferFailed && this.onTransferFailed(e) : se("WARNING: received handleTransferFailed for unknown call: " + e);
                },
                handleRoster: function(e) {
                    ae("handleRoster"), "function" == typeof this.onHandleRoster && this.onHandleRoster(e);
                },
                handleRosterItem: function(e, t, n, i, o) {
                    ae("handleRosterItem id " + e + " resource " + t + " e " + n + " displayName " + i + " groups " + o), 
                    "function" == typeof this.onHandleRosterItem && this.onHandleRosterItem(e, t, n, i, o);
                },
                handleRosterPresence: function(e, t, n, i) {
                    ae("handleRosterPresence"), "function" == typeof this.onHandleRosterPresence && this.onHandleRosterPresence(e, t, n, i);
                },
                handleMessage: function(e, t, n, i, o) {
                    ae("handleMessage with id " + i + " from " + e + " to " + o + ": " + n), "function" == typeof this.onHandleMessage && this.onHandleMessage(e, t, n, i, o);
                },
                handleSelfPresence: function(e, t, n, i) {
                    ae("handleSelfPresence from " + e + ": " + n), "function" == typeof this.onHandleSelfPresence && this.onHandleSelfPresence(e, t, n, i);
                },
                handleChatState: function(e, t, n) {
                    ae("handleChatState from " + e + ": " + n), "function" == typeof this.onHandleChatState && this.onHandleChatState(e, t, n);
                },
                handleMessageEvent: function(e, t, n, i) {
                    ae("handleMessageEvent from " + e + ": " + n), "function" == typeof this.onHandleMessageEvent && this.onHandleMessageEvent(e, t, n, i);
                },
                handleMessageModified: function(e, t, n, i) {
                    ae("handleMessageModified message id " + t + " by " + e + " in chat with " + i + " msg " + n), 
                    "function" == typeof this.onHandleMessageModified && this.onHandleMessageModified(e, t, n, i);
                },
                handleMessageModifyError: function(e, t, n) {
                    ae("handleMessageModifyError message id " + t + " by " + e + " with code " + n), 
                    "function" == typeof this.onHandleMessageModificationError && this.onHandleMessageModificationError(e, t, n);
                },
                handleMessageRemoved: function(e, t, n) {
                    ae("handleMessageRemoved message id " + t + " by " + e + " in chat with " + n), 
                    "function" == typeof this.onHandleMessageRemoved && this.onHandleMessageRemoved(e, t, n);
                },
                handleSubscription: function(e, t, n, i) {
                    ae("handleSubscription from " + e + ": " + n), "function" == typeof this.onHandleSubscription && this.onHandleSubscription(e, t, n, i);
                },
                onCallRemoteFunctionError: function(e, t, n, i) {
                    ae("onCallRemoteFunctionError method " + e + " params " + t + " code " + n + " description " + i), 
                    "function" == typeof this.onCallRemoteFunctionError && this.onCallRemoteFunctionError(e, t, n, i);
                },
                handleError: function(e, t, n) {
                    ae("handleError type " + e + " code " + t + " description " + n), "function" == typeof this.onIMError && this.onIMError(e, t, n);
                },
                handleUCConnected: function(e) {
                    ae("handleUCConnected id " + e), "function" == typeof this.onUCConnected && this.onUCConnected(e);
                },
                handleUCDisconnected: function() {
                    ae("handleUCDisconnected"), "function" == typeof this.onUCDisconnected && this.onUCDisconnected();
                },
                handleRosterError: function(e) {
                    ae("handleRosterError code " + e), "function" == typeof this.onIMRosterError && this.onIMRosterError(e);
                },
                handleMUCError: function(e, t, n, i) {
                    ae("handleMUCError room " + e + " operation " + t + " code " + n + " text " + i), 
                    "function" == typeof this.onMUCError && this.onMUCError(e, t, n, i);
                },
                handleMUCRoomCreation: function(e) {
                    ae("handleMUCRoomCreation room " + e), "function" == typeof this.onMUCRoomCreation && this.onMUCRoomCreation(e);
                },
                handleMUCSubject: function(e, t, n, i) {
                    ae("handleMUCSubject room " + e + " id " + t + " resource " + n + " subject " + i), 
                    "function" == typeof this.onMUCSubject && this.onMUCSubject(e, t, n, i);
                },
                handleMUCInfo: function(e, t, n, i) {
                    ae("handleMUCInfo room " + e + " features " + t + " name " + n + " info " + i), 
                    "function" == typeof this.onMUCInfo && this.onMUCInfo(e, t, n, i);
                },
                handleMUCMessage: function(e, t, n, i, o, s, a) {
                    ae("handleMUCMessage room " + e + " message_id " + n + " private " + t + " timestamp " + i + " from " + o + " resource " + s + " msg " + a), 
                    "function" == typeof this.onMUCMessage && this.onMUCMessage(e, n, t, i, o, s, a);
                },
                handleMUCInvitation: function(e, t, n, i, o, s) {
                    ae("handleMUCInvitation room " + e + " from " + t + " reason " + n + " body " + i + " password " + o + " cont " + s), 
                    "function" == typeof this.onMUCInvitation && this.onMUCInvitation(e, t, n, i, o, s);
                },
                handleMUCInviteDecline: function(e, t, n) {
                    ae("handleMUCInviteDecline room " + e + " invitee " + t + " reason " + n), "function" == typeof this.onMUCInviteDecline && this.onMUCInviteDecline(e, t, n);
                },
                handleMUCParticipantPresence: function(e, t, n, i) {
                    ae("handleMUCParticipantPresence room " + e + " participant " + t + " presence " + n + " msg " + i), 
                    "function" == typeof this.onMUCParticipantPresence && this.onMUCParticipantPresence(e, t, n, i);
                },
                handleMUCParticipantJoin: function(e, t, n) {
                    ae("handleMUCParticipantJoin room " + e + " participant " + t + " displayName " + n), 
                    "function" == typeof this.onMUCNewParticipant && this.onMUCNewParticipant(e, t, n);
                },
                handleMUCParticipantLeft: function(e, t) {
                    ae("handleMUCParticipantLeft room " + e + " participant " + t), "function" == typeof this.onMUCParticipantExit && this.onMUCParticipantExit(e, t);
                },
                handleMUCRooms: function(e) {
                    ae("handleMUCRooms rooms " + e), "function" == typeof this.onMUCRooms && this.onMUCRooms(e);
                },
                handleMUCParticipants: function(e, t) {
                    ae("handleMUCParticipants room " + e + " list " + t), "function" == typeof this.onMUCParticipants && this.onMUCParticipants(e, t);
                },
                handleMUCBanList: function(e, t) {
                    ae("handleMUCBanList room " + e + " list " + t), "function" == typeof this.onMUCBanList && this.onMUCBanList(e, t);
                },
                handleMUCOperationResult: function(e, t, n) {
                    ae("handleMUCOperationResult room " + e + " operation " + t + " result " + n), "function" == typeof this.onMUCOperationResult && this.onMUCOperationResult(e, t, n);
                },
                handleMUCHistory: function(e, t, n) {
                    ae("handleMUCHistory room " + e + " mid " + t + " list " + n), "function" == typeof this.onMUCHistory && this.onMUCHistory(e, t, n);
                },
                handleMUCMessageModified: function(e, t, n, i, o, s, a) {
                    ae("handleMUCMessageModified room " + e + " priv " + t + " mid " + n + " timestamp " + i + " from " + o + " resource " + s + " msg " + a), 
                    "function" == typeof this.onMUCMessageModified && this.onMUCMessageModified(e, t, n, i, o, s, a);
                },
                handleMUCMessageModifyError: function(e, t, n, i) {
                    ae("handleMUCMessageModifyError room " + e + " priv " + t + " mid " + n + " with code " + i), 
                    "function" == typeof this.onMUCMessageModificationError && this.onMUCMessageModificationError(e, t, n, i);
                },
                handleMUCMessageRemoved: function(e, t, n, i, o, s) {
                    ae("handleMUCMessageRemoved room " + e + " priv " + t + " mid " + n + " timestamp " + i + " from " + o + " resource " + s), 
                    "function" == typeof this.onMUCMessageRemoved && this.onMUCMessageRemoved(e, t, n, i, o, s);
                },
                handleMUCChatState: function(e, t, n, i) {
                    ae("handleMUCChatState room " + e + " from " + t + " resource " + n + " state " + i), 
                    "function" == typeof this.onMUCChatState && this.onMUCChatState(e, t, n, i);
                },
                handleHistory: function(e, t, n) {
                    ae("handleHistory uri " + e + " mid " + t + " list " + n), "function" == typeof this.onHistory && this.onHistory(e, t, n);
                },
                handlePreFlightCheckResult: function(e, t, n) {
                    this.onCheckComplete && this.onCheckComplete(e, t, n);
                },
                handleVoicemail: function(e) {
                    this.onVoicemail && this.onVoicemail(e);
                },
                __connectionFailed: function() {
                    W != i && this.disconnect();
                }
            };
            var be = function(e) {
                var t = JSON.parse(e.data), n = t.name, i = t.params;
                ae("Called local function " + n + " with params " + JSON.stringify(i)), "function" == typeof Se[n] ? Se[n].apply(this, i) : se("Unknown function called: " + n), 
                ve();
            }.bind(this), Ne = function(e, t) {
                return "function" == typeof mozRTCSessionDescription ? new mozRTCSessionDescription({
                    type: e,
                    sdp: t
                }) : new RTCSessionDescription({
                    type: e,
                    sdp: t
                });
            }, Ue = function(e, t, n, i, o) {
                var s, a, r = e, c = t, l = n, d = i, h = o, u = !0;
                this.id = function() {
                    return r;
                }, this.getRemoteParty = function() {
                    return l;
                }, this.getState = function() {
                    return c;
                }, this.setState = function(e) {
                    c = e;
                }, this.getDisplayName = function() {
                    return d;
                }, this.wired = function() {
                    return h;
                }, this.setPeerConnection = function(e) {
                    console.log("Set peer connection: " + e), s = e;
                }, this.getPeerConnection = function() {
                    return console.log("Get peer connection: " + s), s;
                }, this.setHeaders = function(e) {
                    a = e;
                }, this.getHeaders = function() {
                    return a;
                }, this.streamsAreActive = function() {
                    return u;
                }, this.setStreamsActive = function(e) {
                    u = e, ie[r] && ie[r].setStreamsActive(e);
                }, this.getVideoElementId = function() {
                    return s.getVideoElementId();
                }, this.getAudioElementId = function() {
                    return s.getAudioElementId();
                }, this.canStartSendingCandidates = function() {
                    s.canStartSendingCandidates();
                }, this.notifyICETimeout = function() {
                    he(r);
                };
            }, _e = function(t, n, i) {
                function o() {
                    null === fe && (fe = setTimeout(function() {
                        fe = null, pe.length > 0 && ye(f, "voximplant", "sdpfrag", JSON.stringify(pe), {}), 
                        pe = [];
                    }, 100));
                }
                function s(e, t) {
                    pe.push([ t, e ]), he && o();
                }
                var a = null, r = !1, c = i !== !1, l = null;
                n && (l = Pe);
                var d = new v(l, {
                    optional: [ {
                        DtlsSrtpKeyAgreement: "true"
                    } ]
                });
                R && (d.removeStream = function(e) {
                    e.forEach(function(e) {
                        d.removeTrack(e);
                    });
                });
                var f = t, C = n;
                this.isDirect = function() {
                    return C;
                };
                var m, T = function(e) {
                    se("PC [" + f + "]: " + e);
                }, I = function(e) {
                    ae("PC [" + f + "]: " + e);
                }, E = function(e) {
                    se("PC [" + f + "] ERROR: " + e);
                };
                this.setCall = function(e) {
                    m = e;
                }, this.getCall = function() {
                    return m;
                };
                var M, w, O = null;
                if (M = b(), M.id = "vi_audio_" + f, M.volume = $, document.body.appendChild(M), 
                V) {
                    w = U(), w.id = "vi_video_" + f, w.width = 400, w.height = 300, w.volume = $;
                    var A = Q ? document.getElementById(Q) : document.body;
                    A.appendChild(w);
                }
                var P = null, z = null, k = !1, H = !1, W = null, q = null, J = null, K = !1, Z = !0, Y = null, ee = function() {
                    m && m.notifyICETimeout();
                }.bind(this);
                this.getStats = function(e) {
                    J && W && d.getStats(function(e) {
                        var t = e.result();
                        for (var n in t) "ssrc" == t[n].type && (t[n].local == t[n] || !t[n].remote, t[n].remote == t[n] || !t[n].local);
                    });
                }, this.getRTCPeerConnection = function() {
                    return d;
                }, this.getRemoteAudioStream = function() {
                    return W;
                }, this.getRemoteVideoStream = function() {
                    return q;
                }, this.getVideoElementId = function() {
                    return w ? w.id : null;
                }, this.getAudioElementId = function() {
                    return M ? M.id : null;
                }, this.setLocalStream = function(e) {
                    if (!K && (J && (R ? d.removeStream(X) : d.removeStream(J), J = null), e)) {
                        J = e;
                        "undefined" == typeof e.getAudioTracks ? e.audioTracks : e.getAudioTracks(), "undefined" == typeof e.getVideoTracks ? e.videoTracks : e.getVideoTracks();
                        J = e, R ? J.getTracks().forEach(function(e) {
                            X.push(d.addTrack(e, J));
                        }) : d.addStream(J), D(J.getAudioTracks(), !j), D(J.getVideoTracks(), B);
                    }
                };
                var te = function(e) {
                    e && (Y = e, d.addStream(Y));
                };
                this.setScreenSharingStream = function(e) {
                    Y = e;
                }, this.addScreenSharing = function(e) {
                    K || (Y && (d.removeStream(Y), Y = null), te(e));
                }, this.onIncomingCall = function(e) {
                    K || (P = Ne("offer", e), d.setRemoteDescription(P, function() {}, E));
                }, this.onConnectionConnected = function(e) {
                    K || C && (P = Ne("answer", e), d.setRemoteDescription(P, function() {
                        a = setTimeout(ee, h);
                    }, E));
                }, this.outgoingCall = function() {
                    K || d.createOffer(function(e) {
                        p(e), z = e, d.setLocalDescription(Ne("offer", e.sdp), function() {
                            ne();
                        }, E);
                    }, E, x);
                };
                var ne = function() {
                    K || Le("createCall", [ -1, m.getRemoteParty(), !1, t, null, null, m.getHeaders(), "", z.sdp ]);
                };
                this.createAnswer = function() {
                    K || (I("Calling createAnswer"), d.createAnswer(ie, E));
                };
                var ie = function(e) {
                    K || (p(e), k = -1 != e.sdp.indexOf("a=rtcp-mux"), d.setLocalDescription(e, function() {
                        z = e, H = !0, oe();
                    }, E));
                }.bind(this), oe = function() {
                    K || (a = setTimeout(ee, h), T("Sending local answer"), I("Local answer: " + z.sdp), 
                    C ? Le("acceptCall", [ f, ue(m.getHeaders()), z.sdp ]) : Le("__confirmPC", [ f, z.sdp ]));
                }, re = !1, ce = function() {
                    re || (re = !0);
                }, he = !1, fe = null, pe = [], Ce = null, me = null, ge = null;
                this.canStartSendingCandidates = function() {
                    he = !0, o();
                }, this.addRemoteCandidate = function(e, t) {
                    d.addIceCandidate(new y({
                        candidate: t.substring(2),
                        sdpMLineIndex: e
                    }), function() {
                        console.log("Added ice candidate");
                    }, function(e) {
                        I("error adding ice candidate " + e);
                    });
                };
                var ve = function(e) {
                    if (!K) if (e.candidate) {
                        I("ICE candidate: " + e.candidate.candidate);
                        var t = e.candidate.candidate, n = t;
                        -1 == n.indexOf("a=") && (n = "a=" + n), S && z && (z.sdp += n, z.sdp += "\r\n"), 
                        C ? s(n, e.candidate.sdpMLineIndex) : Le("__addCandidate", [ f, n, e.candidate.sdpMLineIndex ]);
                    } else T("End of candidates."), ce();
                };
                this.setRemoteSDP = function(e, t, n) {
                    "string" == typeof n && (Ce = n), d.setRemoteDescription(Ne(e ? "offer" : "answer", t), function() {
                        e ? d.createAnswer(function(e) {
                            p(e), d.setLocalDescription(e, function() {
                                ye(f, "vi", "sdpanswer", e.sdp, null), r = !1;
                            }, function(e) {});
                        }, function(e) {
                            T("Error: " + e);
                        }) : r = !1;
                    }, function(e) {
                        T("Error: " + e);
                    });
                };
                var Se = function() {
                    return K ? void T("Renegotiation requested on closed PeerConnection") : null === z ? void T("Renegotiation needed, but no local SD, skipping") : "connected" != d.iceConnectionState && "completed" != d.iceConnectionState ? (T("Renegotiation requested while ice state is " + d.iceConnectionState + ". Postponing"), 
                    void setTimeout(Se, 100)) : r ? void T("Renegotiation in progress. Queueing") : (T("Renegotiation started"), 
                    r = !0, void (C ? d.createOffer(function(e) {
                        p(e), T("New SDP: " + e.sdp), d.setLocalDescription(e, function() {
                            var t = {};
                            Y && (t["X-ScreenStreamId"] = Y.id), ye(f, "vi", "sdpoffer", e.sdp, t);
                        }, function(e) {
                            T("Error: " + e);
                        });
                    }, function(e) {
                        T("ERROR: " + e);
                    }, x) : d.setRemoteDescription(P, function() {
                        return K ? void (r = !1) : void d.createAnswer(function(e) {
                            return K ? void (r = !1) : (p(e), z = e, void d.setLocalDescription(z, function() {
                                r = !1, T("Renegotiation successful");
                            }, function(e) {
                                r = !1, T("ERROR: " + e);
                            }));
                        }, function(e) {
                            r = !1, T("ERROR: " + e);
                        });
                    }, function(e) {
                        r = !1, T("ERROR: " + e);
                    })));
                }, Re = function(t, n) {
                    navigator.mozGetUserMedia ? t.getStats(null, function(e) {
                        console.log(e);
                        var t = [];
                        e.forEach(function(e) {
                            "inboundrtp" != e.type && "outboundrtp" != e.type || t.push(e);
                        }), t.length > 0 && n(t);
                    }, function(t) {
                        T("ERROR: " + e);
                    }) : t.getStats(function(e) {
                        console.log(e);
                        var t = [];
                        e.result().forEach(function(e) {
                            var n = {};
                            e.names().forEach(function(t) {
                                n[t] = e.stat(t);
                            }), n.id = e.id, n.type = e.type, n.timestamp = e.timestamp, "ssrc" == n.type && t.push(n);
                        }), n(t);
                    });
                }, Te = function(e) {
                    var t = F(e.stream).length > 0, n = e.stream.id == Ce;
                    if (T("Remote stream added " + e.stream.id + " " + (t ? "video" : "audio")), n) {
                        if (null == ge) {
                            ge = U(), ge.id = "vi_ss_" + f, ge.width = 400, ge.height = 300, ge.volume = 0;
                            var i = Q ? document.getElementById(Q) : document.body;
                            i.appendChild(ge);
                        }
                        me = e.stream, g(ge, e.stream), de(f, ge.id);
                    } else t ? q = e.stream : W = e.stream, t ? w && c && g(w, e.stream) : c && g(M, e.stream), 
                    t || O || (O = setInterval(function() {
                        Re(d, function(e) {
                            le(f, e);
                        });
                    }, u)), this.setStreamsActive(Z);
                }, Ie = function(e) {}, Ee = function(e) {
                    if ("stable" == d.signalingState && null != Y) {
                        var t = d.getLocalStreams();
                        for (var n in t) if (t[n] == Y) return;
                        te(Y);
                    }
                };
                this.setPlaybackVolume = function(e) {
                    M && (M.volume = e), w && (w.volume = e);
                }, this.streamsAreActive = function() {
                    return Z;
                }, this.setStreamsActive = function(e) {
                    Z = e, D(L(W), e && !G), D(L(q), e && !G), D(F(q), e), Le("__muteLocal", [ f, !e ]);
                }.bind(this), this.updateMicrophoneMuteState = function() {}, this.updateSpeakerMuteState = function() {
                    W && D(L(W), Z && !G);
                }, this.activateStreams = function() {
                    K || this.setStreamsActive(!0);
                }, this.deactivateStreams = function() {
                    K || this.setStreamsActive(!1);
                }, d.onicecandidate = ve.bind(this), d.onaddstream = Te.bind(this), d.onnegotiationneeded = Se.bind(this), 
                d.onremovestream = Ie.bind(this), d.onsignalingstatechange = Ee.bind(this), d.oniceconnectionstatechange = function() {
                    ("completed" == d.iceConnectionState || "connected" == d.iceConnectionState && a) && (clearTimeout(a), 
                    a = null);
                }.bind(this), this.close = function() {
                    K = !0, O && clearInterval(O), O = null, d.close(), M && ("undefined" != typeof AdapterJS ? document.getElementById(M.id).parentNode.removeChild(document.getElementById(M.id)) : M.parentNode.removeChild(M), 
                    N(M)), w && ("undefined" != typeof AdapterJS ? document.getElementById(w.id).parentNode.removeChild(document.getElementById(w.id)) : w.parentNode.removeChild(w), 
                    _(w)), ge && (ge.parentNode.removeChild(ge), _(ge));
                }, this.start = function(e) {
                    K || (P = Ne("offer", e), d.setRemoteDescription(P, function() {
                        d.createAnswer(function(e) {
                            p(e), console.log("Local answer created: " + e.sdp), k = -1 != e.sdp.indexOf("a=rtcp-mux"), 
                            d.setLocalDescription(e, function() {
                                z = e, H = !0, oe();
                            }, E);
                        }, E);
                    }, E));
                };
            }, Le = function(e, t) {
                ae("Called remote function " + e + " with params " + JSON.stringify(t)), H ? H.send(JSON.stringify({
                    name: e,
                    params: t
                })) : se("ERROR: can't call remote function when not connected"), ve();
            };
        };
    }(i), function(e, t) {
        e.Config = {}, e.FlashVideoSettings = {}, e.VideoSettings = {}, e.AudioSourceInfo = {}, 
        e.VideoSourceInfo = {}, e.AudioOutputInfo = {}, e.NetworkInfo = {}, e.SubscriptionRequestType = {
            Subscribe: 0,
            Unsubscribe: 1
        }, e.ChatStateType = {
            Active: 1,
            Composing: 2,
            Paused: 4,
            Inactive: 8,
            Gone: 16,
            Invalid: 32
        }, e.MessageEventType = {
            Offline: 1,
            Delivered: 2,
            Displayed: 4,
            Composing: 8,
            Invalid: 16,
            Cancel: 32
        }, e.RosterItemEvent = {
            Added: 0,
            Removed: 1,
            Updated: 2,
            Subscribed: 3,
            Unsubscribed: 4
        }, e.UserStatuses = {
            Online: 0,
            Chat: 1,
            Away: 2,
            DND: 3,
            XA: 4,
            Offline: 5
        }, e.OperatorACDStatuses = {
            Offline: "OFFLINE",
            Online: "ONLINE",
            Ready: "READY",
            InService: "IN_SERVICE",
            AfterService: "AFTER_SERVICE",
            Timeout: "TIMEOUT",
            DND: "DND"
        }, e.IMErrorType = {
            RemoteFunctionError: "RemoteFunctionError",
            Error: "Error",
            RosterError: "RosterError"
        }, e.LoginOptions = {}, e.RosterItem = {}, e.ChatRoom = {}, e.ChatRoomInfo = {}, 
        e.ChatRoomParticipant = {}, e.ChatRoomOperationType = {
            Ban: 13,
            Unban: 12
        }, e.ParticipantInfo = {}, e.IMHistoryMessage = {};
    }(i), function(e, t) {
        e.Events = {
            SDKReady: "SDKReady",
            ConnectionEstablished: "ConnectionEstablished",
            ConnectionFailed: "ConnectionFailed",
            ConnectionClosed: "ConnectionClosed",
            AuthResult: "AuthResult",
            PlaybackFinished: "PlaybackFinished",
            MicAccessResult: "MicAccessResult",
            IncomingCall: "IncomingCall",
            SourcesInfoUpdated: "SourcesInfoUpdated",
            NetStatsReceived: "NetStatsReceived"
        }, e.CallEvents = {
            Connected: "Connected",
            Disconnected: "Disconnected",
            Failed: "Failed",
            ProgressToneStart: "ProgressToneStart",
            ProgressToneStop: "ProgressToneStop",
            MessageReceived: "MessageReceived",
            InfoReceived: "InfoReceived",
            TransferComplete: "TransferComplete",
            TransferFailed: "TransferFailed",
            RemoteScreenCaptureStarted: "RemoteScreenCaptureStarted",
            ICETimeout: "ICETimeout",
            RTCStatsReceived: "RTCStatsReceived"
        }, e.IMEvents = {
            RosterReceived: "RosterReceived",
            RosterItemChange: "RosterItemChange",
            RosterPresenceUpdate: "RosterPresenceUpdate",
            PresenceUpdate: "PresenceUpdate",
            MessageReceived: "MessageReceived",
            MessageModified: "MessageModified",
            MessageNotModified: "MessageNotModified",
            MessageRemoved: "MessageRemoved",
            ChatStateUpdate: "ChatStateUpdate",
            MessageStatus: "MessageStatus",
            SubscriptionRequest: "SubscriptionRequest",
            ChatHistoryReceived: "ChatHistoryReceived",
            ChatRoomCreated: "ChatRoomCreated",
            ChatRoomSubjectChange: "ChatRoomSubjectChange",
            ChatRoomInfo: "ChatRoomInfo",
            ChatRoomMessageReceived: "ChatRoomMessageReceived",
            ChatRoomInvitation: "ChatRoomInvitation",
            ChatRoomInviteDeclined: "ChatRoomInviteDeclined",
            ChatRoomPresenceUpdate: "ChatRoomPresenceUpdate",
            ChatRoomNewParticipant: "ChatRoomNewParticipant",
            ChatRoomParticipantExit: "ChatRoomParticipantExit",
            ChatRoomsDataReceived: "ChatRoomsDataReceived",
            ChatRoomParticipants: "ChatRoomParticipants",
            ChatRoomBanList: "ChatRoomBanList",
            ChatRoomHistoryReceived: "ChatRoomHistoryReceived",
            ChatRoomMessageModified: "ChatRoomMessageModified",
            ChatRoomMessageNotModified: "ChatRoomMessageNotModified",
            ChatRoomMessageRemoved: "ChatRoomMessageRemoved",
            ChatRoomStateUpdate: "ChatRoomStateUpdate",
            ChatRoomError: "ChatRoomError",
            ChatRoomOperation: "ChatRoomOperation",
            SystemError: "IMError",
            UCConnected: "UCConnected",
            UCDisconnected: "UCDisconnected"
        };
    }(i), function(e, t) {
        e.Call = function(e, t, n, i, o, s) {
            var a = o, r = e, c = t, l = n, d = i, h = s;
            this.eventListeners = {}, this.call = function(e) {
                return "undefined" == typeof e ? r : void (r = e);
            }, this.__number = function(e) {
                return "undefined" == typeof e ? c : void (c = e);
            }, this.__displayName = function() {
                return l;
            }, this.__headers = function() {
                return d;
            }, this.RTC = function() {
                return a;
            }, this.zingayaAPI = function() {
                return h;
            };
        }, e.Call.prototype = {
            id: function() {
                return this.call();
            },
            number: function() {
                return this.__number();
            },
            displayName: function() {
                return this.__displayName();
            },
            headers: function() {
                return this.__headers();
            },
            active: function() {
                return this.RTC() ? this.zingayaAPI().isCallActive(this.call()) : e.Utils.swfMovie("voximplantSWF").isCallActive(this.call());
            },
            state: function() {
                if (this.RTC()) return this.zingayaAPI().getCallState(this.call());
                var t = e.Utils.swfMovie("voximplantSWF").getCallState(this.call()).toUpperCase();
                switch (t) {
                  case "CONNECTING":
                    t = e.VI_CALL_STATE_ALERTING;
                    break;

                  case "CONNECTED_ON_HOLD":
                    t = e.VI_CALL_STATE_CONNECTED;
                    break;

                  case "DISCONNECTED":
                  case "FAILED":
                    t = e.VI_CALL_STATE_ENDED;
                }
                return t;
            },
            answer: function(t, n) {
                if ("undefined" != typeof t && ("undefined" == typeof n && (n = {}), n["VI-CallData"] = t), 
                this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_ALERTING) throw new Error("NO_INCOMING_CALL");
                    this.zingayaAPI().answerCall(this.call(), n);
                } else n = JSON.stringify(n), console.log("Accepting call, id " + this.call()), 
                e.Utils.swfMovie("voximplantSWF").accept(this.call(), n);
            },
            decline: function(t) {
                if (this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_ALERTING) throw new Error("NO_INCOMING_CALL");
                    this.zingayaAPI().rejectCall(this.call(), 486, t);
                } else t = e.Utils.stringifyExtraHeaders(t), e.Utils.swfMovie("voximplantSWF").reject(this.call(), t);
            },
            reject: function(e) {
                this.decline(e);
            },
            hangup: function(t) {
                if (this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_CONNECTED && this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_PROGRESSING) throw new Error("WRONG_CALL_STATE");
                    this.zingayaAPI().hangupCall(this.call(), t);
                } else t = e.Utils.stringifyExtraHeaders(t), e.Utils.swfMovie("voximplantSWF").disconnectCall(this.call(), t);
            },
            sendTone: function(t) {
                if ("*" == t) t = 10; else if ("#" == t) t = 11; else if (t = parseInt(t), 0 > t || t > 9) throw new Error("WRONG_TONE_INPUT");
                if (this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_CONNECTED) throw new Error("CALL_NOT_CONNECTED");
                    this.zingayaAPI().sendDigit(this.call(), t);
                } else e.Utils.swfMovie("voximplantSWF").sendDTMF(t, this.call());
            },
            mutePlayback: function() {
                this.RTC() ? this.zingayaAPI().mutePlayback(!0) : e.Utils.swfMovie("voximplantSWF").muteIncomingAudio(this.call());
            },
            muteMicrophone: function() {
                this.RTC() ? this.zingayaAPI().muteMicrophone(!0) : e.Utils.swfMovie("voximplantSWF").muteOutgoingAudio(this.call());
            },
            unmutePlayback: function() {
                this.RTC() ? this.zingayaAPI().mutePlayback(!1) : e.Utils.swfMovie("voximplantSWF").unmuteIncomingAudio(this.call());
            },
            unmuteMicrophone: function() {
                this.RTC() ? this.zingayaAPI().muteMicrophone(!1) : e.Utils.swfMovie("voximplantSWF").unmuteOutgoingAudio(this.call());
            },
            sendVideo: function(e) {},
            showRemoteVideo: function(t) {
                "undefined" == typeof t && (t = !0), this.RTC() ? document.getElementById(this.zingayaAPI().getVideoElementId(this.call())).style.display = t ? "block" : "none" : e.Utils.swfMovie("voximplantSWF").showRemoteVideo(this.call(), t);
            },
            setRemoteVideoPosition: function(t, n) {
                if (this.RTC()) throw new Error("Please use CSS to position '#voximplantcontainer' element");
                e.Utils.swfMovie("voximplantSWF").setRemoteViewPosition(this.call(), t, n);
            },
            setRemoteVideoSize: function(t, n) {
                if (this.RTC()) throw new Error("Please use CSS to set size of '#voximplantcontainer' element");
                e.Utils.swfMovie("voximplantSWF").setRemoteViewSize(this.call(), t, n);
            },
            sendInfo: function(t, n, i) {
                var o, s, a = t.indexOf("/");
                if (-1 == a ? (o = "application", s = t) : (o = t.substring(0, a), s = t.substring(a + 1)), 
                this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_CONNECTED) throw new Error("CALL_NOT_CONNECTED");
                    this.zingayaAPI().sendSIPInfo(this.call(), o, s, n, i);
                } else i = e.Utils.stringifyExtraHeaders(i), e.Utils.swfMovie("voximplantSWF").sendSIPInfo(this.call(), o, s, n, i);
            },
            sendMessage: function(t) {
                if (this.RTC()) {
                    if (this.zingayaAPI().getCallState(this.call()) != e.VI_CALL_STATE_CONNECTED) throw new Error("CALL_NOT_CONNECTED");
                    this.zingayaAPI().sendInstantMessage(this.call(), t);
                } else e.Utils.swfMovie("voximplantSWF").sendMessage(this.call(), t);
            },
            setVideoSettings: function(t, n, i) {
                this.RTC() ? this.zingayaAPI().setConstraints(t, n, i, !0) : this.useRTCOnly || ("[object Object]" == Object.prototype.toString.call(t) && (t = JSON.stringify(t)), 
                e.Utils.swfMovie("voximplantSWF").setVideoSettings(t, this.call()));
            },
            getIncomingStreamInfo: function() {
                if (this.RTC()) ; else if (!this.useRTCOnly) return JSON.parse(e.Utils.swfMovie("voximplantSWF").getIncomingStreamInfo(this.call()));
            },
            getOutgoingStreamInfo: function() {
                if (this.RTC()) ; else if (!this.useRTCOnly) return JSON.parse(e.Utils.swfMovie("voximplantSWF").getOutgoingStreamInfo(this.call()));
            },
            getRemoteAudioStream: function() {
                return this.zingayaAPI().getPeerConnection(this.call()).getRemoteAudioStream();
            },
            getRemoteVideoStream: function() {
                return this.zingayaAPI().getPeerConnection(this.call()).getRemoteVideoStream();
            },
            setLocalStream: function(e) {
                this.zingayaAPI().getPeerConnection(this.call()).setLocalStream(e);
            },
            getRTCPeerConnection: function() {
                return this.zingayaAPI().getPeerConnection(this.call()).getRTCPeerConnection();
            },
            getVideoElementId: function() {
                return this.RTC() ? this.zingayaAPI().getVideoElementId(this.call()) : void 0;
            },
            getAudioElementId: function() {
                return this.RTC() ? this.zingayaAPI().getAudioElementId(this.call()) : void 0;
            },
            useAudioOutput: function(e) {
                if (this.RTC()) {
                    var t = this.zingayaAPI().getVideoElementId(this.call()), n = this.zingayaAPI().getAudioElementId(this.call());
                    document.getElementById(n).currentTime > 0 ? document.getElementById(n).setSinkId(e) : document.getElementById(t).currentTime > 0 && document.getElementById(t).setSinkId(e);
                }
            }
        }, e.Call.prototype.addEventListener = function(e, t) {
            "undefined" == typeof this.eventListeners[e] && (this.eventListeners[e] = []), this.eventListeners[e].push(t);
        }, e.Call.prototype.removeEventListener = function(e, t) {
            if ("undefined" != typeof this.eventListeners[e]) for (var n = 0; n < this.eventListeners[e].length; n++) if (this.eventListeners[e][n] == t) {
                this.eventListeners[e].splice(n, 1);
                break;
            }
        };
    }(i), function(e, t) {
        e.Client = function() {
            this.config = null, this.calls = [];
            var n = e.Call;
            delete e.Call;
            var i = !1;
            this.eventListeners = {}, this.progressToneScript = {
                US: "440@-19,480@-19;*(2/4/1+2)",
                RU: "425@-19;*(1/3/1)"
            }, this.playingNow = !1, this.serversList = [];
            var o = 100;
            this.audioSourcesList = [], this.videoSourcesList = [], this.audioOutputsList = [], 
            this.deviceEnumAPI = function() {
                navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(this.gotSources) : "undefined" != typeof MediaStreamTrack && "undefined" != typeof MediaStreamTrack.getSources && MediaStreamTrack.getSources(this.gotSources);
            }, this.gotSources = function(e) {
                0 !== this.audioSourcesList.length && (this.audioSourcesList = []), 0 !== this.videoSourcesList.length && (this.videoSourcesList = []), 
                0 !== this.audioOutputsList.length && (this.audioOutputsList = []);
                for (var t = 0, n = 0, i = 0, o = 0; o != e.length; ++o) {
                    var s = e[o];
                    "audio" === s.kind || "audioinput" === s.kind ? (n++, this.audioSourcesList.push({
                        id: s.id || s.deviceId,
                        name: s.label || "Audio recording device " + n
                    })) : "video" === s.kind || "videoinput" === s.kind ? (t++, this.videoSourcesList.push({
                        id: s.id || s.deviceId,
                        name: s.label || "Video recording device " + t
                    })) : "audiooutput" === s.kind && (i++, this.audioOutputsList.push({
                        id: s.id || s.deviceId,
                        name: s.label || "Audio playback device " + i
                    }));
                }
                this.dispatchEvent({
                    name: "SourcesInfoUpdated"
                });
            }.bind(this), this.__init = function(i) {
                function o() {
                    if (this.dispatchEvent({
                        name: "SDKReady",
                        version: e.version
                    }), -1 != navigator.userAgent.indexOf("Safari")) {
                        var t = document.getElementById(this.swfContainer);
                        null !== t && (t.style.minWidth = t.style.width = "215px");
                    }
                    for (var n = JSON.parse(e.Utils.swfMovie("voximplantSWF").audioSources()), i = JSON.parse(e.Utils.swfMovie("voximplantSWF").videoSources()), o = 0; o < n.length; o++) this.audioSourcesList.push({
                        id: o,
                        name: n[o]
                    });
                    for (o = 0; o < i.length; o++) this.videoSourcesList.push({
                        id: o,
                        name: i[o]
                    });
                    this.dispatchEvent({
                        name: "SourcesInfoUpdated"
                    });
                }
                if (null !== this.config) throw "VoxImplant.Client has been already initialized";
                if (this.config = "undefined" != typeof i ? i : {}, this.config.useFlashOnly === !0 ? this.useFlashOnly = !0 : this.useFlashOnly = !1, 
                this.config.useRTCOnly === !0 ? this.useRTCOnly = !0 : this.useRTCOnly = !1, this.RTCsupported = !1, 
                this.config.micRequired !== !1 ? this.micRequired = !0 : this.micRequired = !1, 
                this.config.videoSupport !== !0 ? this.videoSupport = !1 : this.videoSupport = !0, 
                "undefined" != typeof this.config.videoConstraints ? this.videoConstraints = this.config.videoConstraints : this.videoConstraints = null, 
                "undefined" != typeof this.config.swfContainer ? this.swfContainer = this.config.swfContainer : this.swfContainer = null, 
                "undefined" != typeof this.config.progressToneCountry ? this.progressToneCountry = this.config.progressToneCountry : this.progressToneCountry = "US", 
                this.config.progressTone !== !0 ? this.progressTone = !1 : this.progressTone = !0, 
                this.config.showFlashSettings === !0 ? this.showFlashSettings = !0 : this.showFlashSettings = !1, 
                "undefined" != typeof this.config.serverIp && (this.serverIp = this.config.serverIp), 
                "undefined" != typeof this.config.swfURL && (this.swfURL = this.config.swfURL), 
                "undefined" != typeof this.config.showDebugInfo ? this.showDebugInfo = this.config.showDebugInfo : this.showDebugInfo = !0, 
                "undefined" != typeof this.config.imXSSprotection ? this.imXSSprotection = this.config.imXSSprotection : this.imXSSprotection = !0, 
                "undefined" != typeof this.config.imAutoReconnect ? this.imAutoReconnect = this.config.imAutoReconnect : this.imAutoReconnect = !0, 
                "undefined" != typeof this.config.imReconnectInterval ? this.imReconnectInterval = this.config.imReconnectInterval >= 2e3 ? this.config.imReconnectInterval : 2e3 : this.imReconnectInterval = 3e3, 
                this.imReconnectTs = 0, this.config.showWarnings !== !1 ? this.showWarnings = !0 : this.showWarnings = !1, 
                "string" == typeof this.config.videoContainerId && (this.videoContainerId = this.config.videoContainerId), 
                this.config.connectivityCheck === !1 ? this.connectivityCheck = !1 : this.connectivityCheck = !0, 
                "undefined" != typeof webkitRTCPeerConnection || "undefined" != typeof mozRTCPeerConnection || "undefined" != typeof RTCPeerConnection) if ("undefined" != typeof mozRTCPeerConnection) try {
                    new mozRTCPeerConnection({
                        iceServers: []
                    });
                    this.RTCsupported = !0;
                } catch (s) {} else this.RTCsupported = !0;
                var a;
                if (this.RTCsupported && !this.useFlashOnly) null != window.location.href.match(/^file\:\/{3}.*$/g) && "undefined" != typeof console.error && this.showWarnings && console.error("WebRTC requires application to be loaded from a web server"), 
                this.zingayaAPI = new e.ZingayaAPI(this.videoSupport, this.micRequired), delete e.ZingayaAPI, 
                this.zingayaAPI.setRemoteSinksContainerId(this.videoContainerId), this.zingayaAPI.onConnectionEstablished = function() {
                    this.connectionState(!0), this.dispatchEvent({
                        name: "ConnectionEstablished"
                    });
                }.bind(this), this.zingayaAPI.onConnectionFailed = function(e) {
                    this.connectionState(!1), this.serversList.length > 1 && "undefined" == typeof this.serverIp ? (this.serversList.splice(0, 1), 
                    this.connectTo(this.serversList[0], !0)) : this.dispatchEvent({
                        name: "ConnectionFailed",
                        message: e
                    });
                }.bind(this), this.zingayaAPI.onConnectionClosed = function() {
                    this.connectionState(!1), this.__cleanup(), this.dispatchEvent({
                        name: "ConnectionClosed"
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), this.zingayaAPI.onLoginSuccessful = function(e, t) {
                    this.dispatchEvent({
                        name: "AuthResult",
                        result: !0,
                        displayName: e,
                        options: t
                    });
                }.bind(this), this.zingayaAPI.onLoginFailed = function(e) {
                    this.dispatchEvent({
                        name: "AuthResult",
                        result: !1,
                        code: e.errorCode,
                        key: e.oneTimeKey
                    });
                }.bind(this), this.zingayaAPI.onCallConnected = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "Connected",
                        call: this.getCall(e),
                        headers: t
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), this.zingayaAPI.onCallEnded = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "Disconnected",
                        call: this.getCall(e),
                        headers: t
                    }), this.removeCall(e), this.progressTone && this.stopProgressTone();
                }.bind(this), this.zingayaAPI.onCallFailed = function(e, t, n, i) {
                    this.getCall(e).dispatchEvent({
                        name: "Failed",
                        call: this.getCall(e),
                        code: t,
                        reason: n,
                        headers: i
                    }), this.removeCall(e), this.progressTone && this.stopProgressTone();
                }.bind(this), this.zingayaAPI.onMediaAccessGranted = function(e) {
                    this.deviceEnumAPI(), this.micRequired && this.zingayaAPI.connectTo(this.host, "platform", null, null, this.connectivityCheck), 
                    this.dispatchEvent({
                        name: "MicAccessResult",
                        result: !0,
                        stream: e
                    });
                }.bind(this), this.zingayaAPI.onMediaAccessRejected = function(e) {
                    this.dispatchEvent({
                        name: "MicAccessResult",
                        result: !1,
                        reason: e
                    });
                }.bind(this), this.zingayaAPI.onIncomingCall = function(e, t, i, o) {
                    var s = new n(e, t, i, o, !0, this.zingayaAPI);
                    this.calls.length > 0 && this.zingayaAPI.setCallActive(e, !1), this.calls.push(s), 
                    this.dispatchEvent({
                        name: "IncomingCall",
                        call: s,
                        headers: o
                    });
                }.bind(this), this.zingayaAPI.onCallRinging = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "ProgressToneStart",
                        call: this.getCall(e)
                    }), this.progressTone && this.playProgressTone();
                }.bind(this), this.zingayaAPI.onCallMediaStarted = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "ProgressToneStop",
                        call: this.getCall(e)
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), this.zingayaAPI.onRemoteScreenCaptureStarted = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "RemoteScreenCaptureStarted",
                        call: this.getCall(e),
                        videoElementId: t
                    });
                }.bind(this), this.zingayaAPI.onInstantMessageReceived = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "MessageReceived",
                        call: this.getCall(e),
                        text: t
                    });
                }.bind(this), this.zingayaAPI.onSIPInfoReceived = function(e, t, n, i) {
                    this.getCall(e).dispatchEvent({
                        name: "InfoReceived",
                        call: this.getCall(e),
                        mimeType: t,
                        body: n,
                        headers: i
                    });
                }.bind(this), this.zingayaAPI.onTransferComplete = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "TransferComplete",
                        call: this.getCall(e)
                    });
                }.bind(this), this.zingayaAPI.onTransferFailed = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "TransferFailed",
                        call: this.getCall(e)
                    });
                }.bind(this), this.zingayaAPI.onNetStatsReceived = function(e) {
                    this.dispatchEvent({
                        name: "NetStatsReceived",
                        stats: e
                    });
                }.bind(this), this.zingayaAPI.onRTCStatsCollected = function(e, t) {
                    null != this.getCall(e) && this.getCall(e).dispatchEvent({
                        name: "RTCStatsReceived",
                        stats: t
                    });
                }.bind(this), this.zingayaAPI.onHandleRoster = function(e) {
                    this.dispatchEvent({
                        name: "RosterReceived",
                        roster: e
                    });
                }.bind(this), this.zingayaAPI.onHandleRosterItem = function(e, t, n, i, o) {
                    this.dispatchEvent({
                        name: "RosterItemChange",
                        id: e,
                        resource: t,
                        type: n,
                        displayName: i,
                        groups: o
                    });
                }.bind(this), this.zingayaAPI.onHandleRosterPresence = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "RosterPresenceUpdate",
                        id: e,
                        resource: t,
                        presence: n,
                        message: i
                    });
                }.bind(this), this.zingayaAPI.onHandleMessage = function(t, n, i, o, s) {
                    this.imXSSprotection && (i = e.Utils.filterXSS(i)), this.dispatchEvent({
                        name: "MessageReceived",
                        id: t,
                        resource: n,
                        content: i,
                        message_id: o,
                        to: s
                    });
                }.bind(this), this.zingayaAPI.onHandleSelfPresence = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "PresenceUpdate",
                        id: e,
                        resource: t,
                        presence: n,
                        message: i
                    });
                }.bind(this), this.zingayaAPI.onHandleChatState = function(e, t, n) {
                    this.dispatchEvent({
                        name: "ChatStateUpdate",
                        id: e,
                        resource: t,
                        state: n
                    });
                }.bind(this), this.zingayaAPI.onHandleMessageEvent = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "MessageStatus",
                        id: e,
                        resource: t,
                        type: n,
                        message_id: i
                    });
                }.bind(this), this.zingayaAPI.onHandleMessageModified = function(t, n, i, o) {
                    this.imXSSprotection && (i = e.Utils.filterXSS(i)), this.dispatchEvent({
                        name: "MessageModified",
                        id: t,
                        message_id: n,
                        content: i,
                        to: o
                    });
                }.bind(this), this.zingayaAPI.onHandleMessageModificationError = function(e, t, n) {
                    this.dispatchEvent({
                        name: "MessageNotModified",
                        to: e,
                        message_id: t,
                        code: n
                    });
                }.bind(this), this.zingayaAPI.onHandleMessageRemoved = function(e, t, n) {
                    this.dispatchEvent({
                        name: "MessageRemoved",
                        id: e,
                        message_id: t,
                        to: n
                    });
                }.bind(this), this.zingayaAPI.onHandleSubscription = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "SubscriptionRequest",
                        id: e,
                        resource: t,
                        type: n,
                        message: i
                    });
                }.bind(this), this.zingayaAPI.onCallRemoteFunctionError = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "RemoteFunctionError",
                        errorData: {
                            method: e,
                            params: t,
                            code: n,
                            description: i
                        }
                    });
                }.bind(this), this.zingayaAPI.onIMError = function(e, t, n) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "Error",
                        errorData: {
                            type: e,
                            code: t,
                            description: n
                        }
                    });
                }.bind(this), this.zingayaAPI.onUCConnected = function(e) {
                    this.imAutoReconnect === !0 && clearInterval(this.imReconnectTs), this.dispatchEvent({
                        name: "UCConnected",
                        id: e
                    });
                }.bind(this), this.zingayaAPI.onUCDisconnected = function() {
                    this.imAutoReconnect === !0 && (clearInterval(this.imReconnectTs), this.imReconnectTs = setInterval(function() {
                        this.zingayaAPI.ucReconnect();
                    }.bind(this), this.imReconnectInterval)), this.dispatchEvent({
                        name: "UCDisconnected"
                    });
                }.bind(this), this.zingayaAPI.onIMRosterError = function(e) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "RosterError",
                        errorData: {
                            code: e
                        }
                    });
                }.bind(this), this.zingayaAPI.onMUCError = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomError",
                        room: e,
                        operation: t,
                        code: n,
                        text: i
                    });
                }.bind(this), this.zingayaAPI.onMUCRoomCreation = function(e) {
                    this.dispatchEvent({
                        name: "ChatRoomCreated",
                        room: e
                    });
                }.bind(this), this.zingayaAPI.onMUCSubject = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomSubjectChange",
                        room: e,
                        id: t,
                        resource: n,
                        subject: i
                    });
                }.bind(this), this.zingayaAPI.onMUCInfo = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomInfo",
                        room: e,
                        features: t,
                        room_name: n,
                        info: i
                    });
                }.bind(this), this.zingayaAPI.onMUCMessage = function(t, n, i, o, s, a, r) {
                    this.imXSSprotection && (r = e.Utils.filterXSS(r)), this.dispatchEvent({
                        name: "ChatRoomMessageReceived",
                        room: t,
                        message_id: n,
                        private_message: i,
                        timestamp: o,
                        from: s,
                        resource: a,
                        content: r
                    });
                }.bind(this), this.zingayaAPI.onMUCInvitation = function(e, t, n, i, o, s) {
                    this.dispatchEvent({
                        name: "ChatRoomInvitation",
                        room: e,
                        from: t,
                        reason: n,
                        body: i,
                        password: o,
                        cont: s
                    });
                }.bind(this), this.zingayaAPI.onMUCInviteDecline = function(e, t, n) {
                    this.dispatchEvent({
                        name: "ChatRoomInviteDeclined",
                        room: e,
                        invitee: t,
                        reason: n
                    });
                }.bind(this), this.zingayaAPI.onMUCParticipantPresence = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomPresenceUpdate",
                        room: e,
                        participant: t,
                        presence: n,
                        message: i
                    });
                }.bind(this), this.zingayaAPI.onMUCNewParticipant = function(e, t, n) {
                    this.dispatchEvent({
                        name: "ChatRoomNewParticipant",
                        room: e,
                        participant: t,
                        displayName: n
                    });
                }.bind(this), this.zingayaAPI.onMUCParticipantExit = function(e, t) {
                    this.dispatchEvent({
                        name: "ChatRoomParticipantExit",
                        room: e,
                        participant: t
                    });
                }.bind(this), this.zingayaAPI.onMUCOperationResult = function(e, t, n) {
                    this.dispatchEvent({
                        name: "ChatRoomOperation",
                        room: e,
                        operation: t,
                        result: n
                    });
                }.bind(this), this.zingayaAPI.onMUCRooms = function(e) {
                    this.dispatchEvent({
                        name: "ChatRoomsDataReceived",
                        rooms: e
                    });
                }.bind(this), this.zingayaAPI.onMUCParticipants = function(e, t) {
                    this.dispatchEvent({
                        name: "ChatRoomParticipants",
                        room: e,
                        participants: t
                    });
                }.bind(this), this.zingayaAPI.onMUCBanList = function(e, t) {
                    this.dispatchEvent({
                        name: "ChatRoomBanList",
                        room: e,
                        participants: t
                    });
                }.bind(this), this.zingayaAPI.onMUCHistory = function(t, n, i) {
                    this.imXSSprotection && i.forEach(function(t) {
                        t.body = e.Utils.filterXSS(t.body);
                    }), this.dispatchEvent({
                        name: "ChatRoomHistoryReceived",
                        room: t,
                        message_id: n,
                        messages: i
                    });
                }.bind(this), this.zingayaAPI.onMUCMessageModified = function(t, n, i, o, s, a, r) {
                    this.imXSSprotection && (r = e.Utils.filterXSS(r)), this.dispatchEvent({
                        name: "ChatRoomMessageModified",
                        room: t,
                        private_message: n,
                        message_id: i,
                        timestamp: o,
                        from: s,
                        resource: a,
                        content: r
                    });
                }.bind(this), this.zingayaAPI.onMUCMessageModificationError = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomMessageNotModified",
                        room: e,
                        private_message: t,
                        message_id: n,
                        code: i
                    });
                }.bind(this), this.zingayaAPI.onMUCMessageRemoved = function(e, t, n, i, o, s) {
                    this.dispatchEvent({
                        name: "ChatRoomMessageRemoved",
                        room: e,
                        private_message: t,
                        message_id: n,
                        timestamp: i,
                        from: o,
                        resource: s
                    });
                }.bind(this), this.zingayaAPI.onMUCChatState = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "ChatRoomStateUpdate",
                        room: e,
                        from: t,
                        resource: n,
                        state: i
                    });
                }.bind(this), this.zingayaAPI.onHistory = function(t, n, i) {
                    this.imXSSprotection && i.forEach(function(t) {
                        t.body = e.Utils.filterXSS(t.body);
                    }), this.dispatchEvent({
                        name: "ChatHistoryReceived",
                        id: t,
                        message_id: n,
                        messages: i
                    });
                }.bind(this), this.zingayaAPI.onCallICETimeout = function(e) {
                    "undefined" != typeof this.getCall(e) && null != this.getCall(e) ? this.getCall(e).dispatchEvent({
                        name: "ICETimeout",
                        call: this.getCall(e)
                    }) : console.log("ICETimeout on ended call " + e);
                }.bind(this), this.zingayaAPI.writeLog = function(e) {
                    if ("function" == typeof this.writeLog) this.writeLog(e); else {
                        var t = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            timeZone: "UTC"
                        };
                        this.showDebugInfo && console.log("VI WebRTC: " + new Date().toLocaleTimeString("en-US", t) + " " + e);
                    }
                }.bind(this), this.zingayaAPI.writeTrace = function(e) {
                    if ("function" == typeof this.writeTrace) this.writeTrace(e); else {
                        var t = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            timeZone: "UTC"
                        };
                        this.showDebugInfo && console.log("VI WebRTC: " + new Date().toLocaleTimeString("en-US", t) + " " + e);
                    }
                }.bind(this), checkDOMReady = function() {
                    "undefined" != typeof document && (clearInterval(a), this.dispatchEvent({
                        name: "SDKReady",
                        version: e.version
                    }), this.deviceEnumAPI());
                }, a = setInterval(checkDOMReady.bind(this), 100); else {
                    if (this.useRTCOnly) throw new Error("NO_WEBRTC_SUPPORT");
                    var r = function() {
                        function e() {
                            if (!G) {
                                try {
                                    var e = V.getElementsByTagName("body")[0].appendChild(v("span"));
                                    e.parentNode.removeChild(e);
                                } catch (t) {
                                    return;
                                }
                                G = !0;
                                for (var n = H.length, i = 0; n > i; i++) H[i]();
                            }
                        }
                        function n(e) {
                            G ? e() : H[H.length] = e;
                        }
                        function i(e) {
                            if (typeof z.addEventListener != b) z.addEventListener("load", e, !1); else if (typeof V.addEventListener != b) V.addEventListener("load", e, !1); else if (typeof z.attachEvent != b) y(z, "onload", e); else if ("function" == typeof z.onload) {
                                var t = z.onload;
                                z.onload = function() {
                                    t(), e();
                                };
                            } else z.onload = e;
                        }
                        function o() {
                            k ? s() : a();
                        }
                        function s() {
                            var e = V.getElementsByTagName("body")[0], t = v(N);
                            t.setAttribute("type", L);
                            var n = e.appendChild(t);
                            if (n) {
                                var i = 0;
                                !function() {
                                    if (typeof n.GetVariable != b) {
                                        var o = n.GetVariable("$version");
                                        o && (o = o.split(" ")[1].split(","), J.pv = [ parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10) ]);
                                    } else if (10 > i) return i++, void setTimeout(arguments.callee, 10);
                                    e.removeChild(t), n = null, a();
                                }();
                            } else a();
                        }
                        function a() {
                            var e = W.length;
                            if (e > 0) for (var t = 0; e > t; t++) {
                                var n = W[t].id, i = W[t].callbackFn, o = {
                                    success: !1,
                                    id: n
                                };
                                if (J.pv[0] > 0) {
                                    var s = g(n);
                                    if (s) if (!S(W[t].swfVersion) || J.wk && J.wk < 312) if (W[t].expressInstall && l()) {
                                        var a = {};
                                        a.data = W[t].expressInstall, a.width = s.getAttribute("width") || "0", a.height = s.getAttribute("height") || "0", 
                                        s.getAttribute("class") && (a.styleclass = s.getAttribute("class")), s.getAttribute("align") && (a.align = s.getAttribute("align"));
                                        for (var r = {}, u = s.getElementsByTagName("param"), f = u.length, p = 0; f > p; p++) "movie" != u[p].getAttribute("name").toLowerCase() && (r[u[p].getAttribute("name")] = u[p].getAttribute("value"));
                                        d(a, r, n, i);
                                    } else h(s), i && i(o); else T(n, !0), i && (o.success = !0, o.ref = c(n), i(o));
                                } else if (T(n, !0), i) {
                                    var C = c(n);
                                    C && typeof C.SetVariable != b && (o.success = !0, o.ref = C), i(o);
                                }
                            }
                        }
                        function c(e) {
                            var t = null, n = g(e);
                            if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != b) t = n; else {
                                var i = n.getElementsByTagName(N)[0];
                                i && (t = i);
                            }
                            return t;
                        }
                        function l() {
                            return !B && S("6.0.65") && (J.win || J.mac) && !(J.wk && J.wk < 312);
                        }
                        function d(e, t, n, i) {
                            B = !0, w = i || null, O = {
                                success: !1,
                                id: n
                            };
                            var o = g(n);
                            if (o) {
                                "OBJECT" == o.nodeName ? (E = u(o), M = null) : (E = o, M = n), e.id = F, (typeof e.width == b || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), 
                                (typeof e.height == b || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), 
                                V.title = V.title.slice(0, 47) + " - Flash Player Installation";
                                var s = J.ie && J.win ? "ActiveX" : "PlugIn", a = "MMredirectURL=" + z.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + V.title;
                                if (typeof t.flashvars != b ? t.flashvars += "&" + a : t.flashvars = a, J.ie && J.win && 4 != o.readyState) {
                                    var r = v("div");
                                    n += "SWFObjectNew", r.setAttribute("id", n), o.parentNode.insertBefore(r, o), o.style.display = "none", 
                                    function() {
                                        4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10);
                                    }();
                                }
                                f(e, t, n);
                            }
                        }
                        function h(e) {
                            if (J.ie && J.win && 4 != e.readyState) {
                                var t = v("div");
                                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(u(e), t), e.style.display = "none", 
                                function() {
                                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
                                }();
                            } else e.parentNode.replaceChild(u(e), e);
                        }
                        function u(e) {
                            var t = v("div");
                            if (J.win && J.ie) t.innerHTML = e.innerHTML; else {
                                var n = e.getElementsByTagName(N)[0];
                                if (n) {
                                    var i = n.childNodes;
                                    if (i) for (var o = i.length, s = 0; o > s; s++) 1 == i[s].nodeType && "PARAM" == i[s].nodeName || 8 == i[s].nodeType || t.appendChild(i[s].cloneNode(!0));
                                }
                            }
                            return t;
                        }
                        function f(e, t, n) {
                            var i, o = g(n);
                            if (J.wk && J.wk < 312) return i;
                            if (o) if (typeof e.id == b && (e.id = n), J.ie && J.win) {
                                var s = "";
                                for (var a in e) e[a] != Object.prototype[a] && ("data" == a.toLowerCase() ? t.movie = e[a] : "styleclass" == a.toLowerCase() ? s += ' class="' + e[a] + '"' : "classid" != a.toLowerCase() && (s += " " + a + '="' + e[a] + '"'));
                                var r = "";
                                for (var c in t) t[c] != Object.prototype[c] && (r += '<param name="' + c + '" value="' + t[c] + '" />');
                                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + r + "</object>", 
                                X[X.length] = e.id, i = g(e.id);
                            } else {
                                var l = v(N);
                                l.setAttribute("type", L);
                                for (var d in e) e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? l.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && l.setAttribute(d, e[d]));
                                for (var h in t) t[h] != Object.prototype[h] && "movie" != h.toLowerCase() && p(l, h, t[h]);
                                o.parentNode.replaceChild(l, o), i = l;
                            }
                            return i;
                        }
                        function p(e, t, n) {
                            var i = v("param");
                            i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i);
                        }
                        function C(e) {
                            var t = g(e);
                            t && "OBJECT" == t.nodeName && (J.ie && J.win ? (t.style.display = "none", function() {
                                4 == t.readyState ? m(e) : setTimeout(arguments.callee, 10);
                            }()) : t.parentNode.removeChild(t));
                        }
                        function m(e) {
                            var t = g(e);
                            if (t) {
                                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                                t.parentNode.removeChild(t);
                            }
                        }
                        function g(e) {
                            var t = null;
                            try {
                                t = V.getElementById(e);
                            } catch (n) {}
                            return t;
                        }
                        function v(e) {
                            return V.createElement(e);
                        }
                        function y(e, t, n) {
                            e.attachEvent(t, n), j[j.length] = [ e, t, n ];
                        }
                        function S(e) {
                            var t = J.pv, n = e.split(".");
                            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, 
                            t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2];
                        }
                        function R(e, t, n, i) {
                            if (!J.ie || !J.mac) {
                                var o = V.getElementsByTagName("head")[0];
                                if (o) {
                                    var s = n && "string" == typeof n ? n : "screen";
                                    if (i && (A = null, P = null), !A || P != s) {
                                        var a = v("style");
                                        a.setAttribute("type", "text/css"), a.setAttribute("media", s), A = o.appendChild(a), 
                                        J.ie && J.win && typeof V.styleSheets != b && V.styleSheets.length > 0 && (A = V.styleSheets[V.styleSheets.length - 1]), 
                                        P = s;
                                    }
                                    J.ie && J.win ? A && typeof A.addRule == N && A.addRule(e, t) : A && typeof V.createTextNode != b && A.appendChild(V.createTextNode(e + " {" + t + "}"));
                                }
                            }
                        }
                        function T(e, t) {
                            if (q) {
                                var n = t ? "visible" : "hidden";
                                G && g(e) ? g(e).style.visibility = n : R("#" + e, "visibility:" + n);
                            }
                        }
                        function I(e) {
                            var t = /[\\\"<>\.;]/, n = null != t.exec(e);
                            return n && typeof encodeURIComponent != b ? encodeURIComponent(e) : e;
                        }
                        var E, M, w, O, A, P, b = "undefined", N = "object", U = "Shockwave Flash", _ = "ShockwaveFlash.ShockwaveFlash", L = "application/x-shockwave-flash", F = "SWFObjectExprInst", D = "onreadystatechange", z = window, V = document, x = navigator, k = !1, H = [ o ], W = [], X = [], j = [], G = !1, B = !1, q = !0, J = function() {
                            var e = typeof V.getElementById != b && typeof V.getElementsByTagName != b && typeof V.createElement != b, t = x.userAgent.toLowerCase(), n = x.platform.toLowerCase(), i = n ? /win/.test(n) : /win/.test(t), o = n ? /mac/.test(n) : /mac/.test(t), s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, a = !1, r = [ 0, 0, 0 ], c = null;
                            if (typeof x.plugins != b && typeof x.plugins[U] == N) c = x.plugins[U].description, 
                            !c || typeof x.mimeTypes != b && x.mimeTypes[L] && !x.mimeTypes[L].enabledPlugin || (k = !0, 
                            a = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), 
                            r[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof z.ActiveXObject != b) try {
                                var l = new ActiveXObject(_);
                                l && (c = l.GetVariable("$version"), c && (a = !0, c = c.split(" ")[1].split(","), 
                                r = [ parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10) ]));
                            } catch (d) {}
                            return {
                                w3: e,
                                pv: r,
                                wk: s,
                                ie: a,
                                win: i,
                                mac: o
                            };
                        }();
                        (function() {
                            J.w3 && ((typeof V.readyState != b && "complete" == V.readyState || typeof V.readyState == b && (V.getElementsByTagName("body")[0] || V.body)) && e(), 
                            G || (typeof V.addEventListener != b && V.addEventListener("DOMContentLoaded", e, !1), 
                            J.ie && J.win && (V.attachEvent(D, function() {
                                "complete" == V.readyState && (V.detachEvent(D, arguments.callee), e());
                            }), z == top && !function() {
                                if (!G) {
                                    try {
                                        V.documentElement.doScroll("left");
                                    } catch (t) {
                                        return void setTimeout(arguments.callee, 0);
                                    }
                                    e();
                                }
                            }()), J.wk && !function() {
                                return G ? void 0 : /loaded|complete/.test(V.readyState) ? void e() : void setTimeout(arguments.callee, 0);
                            }(), i(e)));
                        })(), function() {
                            J.ie && J.win && window.attachEvent("onunload", function() {
                                for (var e = j.length, t = 0; e > t; t++) j[t][0].detachEvent(j[t][1], j[t][2]);
                                for (var n = X.length, i = 0; n > i; i++) C(X[i]);
                                for (var o in J) J[o] = null;
                                J = null;
                                for (var s in r) r[s] = null;
                                r = null;
                            });
                        }();
                        return {
                            registerObject: function(e, t, n, i) {
                                if (J.w3 && e && t) {
                                    var o = {};
                                    o.id = e, o.swfVersion = t, o.expressInstall = n, o.callbackFn = i, W[W.length] = o, 
                                    T(e, !1);
                                } else i && i({
                                    success: !1,
                                    id: e
                                });
                            },
                            getObjectById: function(e) {
                                return J.w3 ? c(e) : void 0;
                            },
                            embedSWF: function(e, t, i, o, s, a, r, c, h, u) {
                                var p = {
                                    success: !1,
                                    id: t
                                };
                                J.w3 && !(J.wk && J.wk < 312) && e && t && i && o && s ? (T(t, !1), n(function() {
                                    i += "", o += "";
                                    var n = {};
                                    if (h && typeof h === N) for (var C in h) n[C] = h[C];
                                    n.data = e, n.width = i, n.height = o;
                                    var m = {};
                                    if (c && typeof c === N) for (var g in c) m[g] = c[g];
                                    if (r && typeof r === N) for (var v in r) typeof m.flashvars != b ? m.flashvars += "&" + v + "=" + r[v] : m.flashvars = v + "=" + r[v];
                                    if (S(s)) {
                                        var y = f(n, m, t);
                                        n.id == t && T(t, !0), p.success = !0, p.ref = y;
                                    } else {
                                        if (a && l()) return n.data = a, void d(n, m, t, u);
                                        T(t, !0);
                                    }
                                    u && u(p);
                                })) : u && u(p);
                            },
                            switchOffAutoHideShow: function() {
                                q = !1;
                            },
                            ua: J,
                            getFlashPlayerVersion: function() {
                                return {
                                    major: J.pv[0],
                                    minor: J.pv[1],
                                    release: J.pv[2]
                                };
                            },
                            hasFlashPlayerVersion: S,
                            createSWF: function(e, n, i) {
                                return J.w3 ? f(e, n, i) : t;
                            },
                            showExpressInstall: function(e, t, n, i) {
                                J.w3 && l() && d(e, t, n, i);
                            },
                            removeSWF: function(e) {
                                J.w3 && C(e);
                            },
                            createCSS: function(e, t, n, i) {
                                J.w3 && R(e, t, n, i);
                            },
                            addDomLoadEvent: n,
                            addLoadEvent: i,
                            getQueryParamValue: function(e) {
                                var t = V.location.search || V.location.hash;
                                if (t) {
                                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return I(t);
                                    for (var n = t.split("&"), i = 0; i < n.length; i++) if (n[i].substring(0, n[i].indexOf("=")) == e) return I(n[i].substring(n[i].indexOf("=") + 1));
                                }
                                return "";
                            },
                            expressInstallCallback: function() {
                                if (B) {
                                    var e = g(F);
                                    e && E && (e.parentNode.replaceChild(E, e), M && (T(M, !0), J.ie && J.win && (E.style.display = "block")), 
                                    w && w(O)), B = !1;
                                }
                            }
                        };
                    }();
                    if (createContainer = function() {
                        if ("undefined" != typeof document) {
                            var e;
                            if (clearInterval(a), null !== this.swfContainer) {
                                if (e = document.getElementById(this.swfContainer), null === e) throw new Error("NO_SWF_CONTAINER");
                                e.offsetWidth < 215 && (e.style.minWidth = e.style.width = "215px"), e.offsetHeight < 138 && (e.style.minHeight = e.style.height = "138px");
                            } else e = document.createElement("div"), this.swfContainer = e.id = "voximplantcontainer", 
                            e.style.minWidth = e.style.width = "215px", e.style.minHeight = e.style.height = "138px", 
                            document.body.firstChild ? document.body.insertBefore(e, document.body.firstChild) : document.body.appendChild(e);
                            -1 != navigator.userAgent.indexOf("Safari") && (e.style.minWidth = e.style.width = "310px");
                            var t = document.createElement("div");
                            t.id = "voximplantcontainerSWF", e.appendChild(t);
                            var n = {
                                id: "voximplantSWF",
                                name: "voximplantSWF"
                            }, i = !1, s = {
                                allowScriptAccess: "always",
                                wmode: "window",
                                allowFullScreen: "true"
                            };
                            window.voxImplantFlashAPIReady = o.bind(this);
                            var c = ("https:" == document.location.protocol ? "https://" : "http://") + "cdn.voximplant.com/VoxImplant-3.1.swf?ver=200316";
                            "undefined" != typeof this.swfURL && (c = this.swfURL), r.embedSWF(c, "voximplantcontainerSWF", "100%", "100%", "11.3", "http://cdn.voximplant.com/expressInstall.swf", i, s, n);
                        }
                    }, !r.hasFlashPlayerVersion("11.3")) throw new Error("OLD_FLASH_VERSION");
                    a = setInterval(createContainer.bind(this), 100);
                }
                window.VILog = function(e) {
                    if ("function" == typeof this.writeLog) this.writeLog(e); else {
                        var t = new Date(), n = "UTC";
                        "undefined" != typeof t.getTimezoneOffset() && (n = "UTC " + t.getTimezoneOffset / 60);
                        var i = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            timeZone: n
                        };
                        this.showDebugInfo && "undefined" != typeof console && console.log("VI FLASH: " + t.toLocaleTimeString("en-US", i) + " " + e);
                    }
                }.bind(this), window.VIConnectionEstablished = function() {
                    this.connectionState(!0), this.dispatchEvent({
                        name: "ConnectionEstablished"
                    });
                }.bind(this), window.VIConnectionFailed = function() {
                    this.serversList.length > 1 && "undefined" == typeof this.serverIp ? (this.serversList.splice(0, 1), 
                    this.connectTo(this.serversList[0], !0)) : this.dispatchEvent({
                        name: "ConnectionFailed"
                    });
                }.bind(this), window.VIConnectionClosed = function() {
                    this.connectionState(!1), this.__cleanup(), this.dispatchEvent({
                        name: "ConnectionClosed"
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), window.VIAuthFailed = function(e, t) {
                    this.dispatchEvent({
                        name: "AuthResult",
                        result: !1,
                        code: e,
                        key: t
                    });
                }.bind(this), window.VIAuthSuccessful = function(e, t) {
                    "string" == typeof t && (t = JSON.parse(t)), this.dispatchEvent({
                        name: "AuthResult",
                        result: !0,
                        displayName: e,
                        options: t
                    });
                }.bind(this), window.VICallConnected = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "Connected",
                        call: this.getCall(e),
                        headers: null !== t ? JSON.parse(t) : {}
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), window.VICallDisconnected = function(e, t) {
                    this.getCall(e).dispatchEvent({
                        name: "Disconnected",
                        call: this.getCall(e),
                        headers: null !== t ? JSON.parse(t) : {}
                    }), this.removeCall(e), this.progressTone && this.stopProgressTone();
                }.bind(this), window.VICallFailed = function(e, t, n, i) {
                    this.getCall(e).dispatchEvent({
                        name: "Failed",
                        call: this.getCall(e),
                        code: t,
                        reason: n,
                        headers: null !== i ? JSON.parse(i) : {}
                    }), this.removeCall(e), this.progressTone && this.stopProgressTone();
                }.bind(this), window.VIMicAccessResult = function(e) {
                    this.dispatchEvent({
                        name: "MicAccessResult",
                        result: e
                    });
                }.bind(this), window.VIProgressToneStart = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "ProgressToneStart",
                        call: this.getCall(e)
                    }), this.progressTone && this.playProgressTone();
                }.bind(this), window.VIProgressToneStop = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "ProgressToneStop",
                        call: this.getCall(e)
                    }), this.progressTone && this.stopProgressTone();
                }.bind(this), window.VIIncomingCall = function(e, t, i, o) {
                    var s = new n(e, t, i, null !== o ? JSON.parse(o) : {}, !1);
                    this.calls.length > 0 && this.zingayaAPI.setCallActive(e, !1), this.calls.push(s), 
                    this.dispatchEvent({
                        name: "IncomingCall",
                        call: s,
                        headers: null !== o ? JSON.parse(o) : {}
                    });
                }.bind(this), window.VISIPInfoReceived = function(e, t, n, i, o) {
                    "application" == t && "zingaya-im" == n ? this.getCall(e).dispatchEvent({
                        name: "MessageReceived",
                        call: this.getCall(e),
                        text: i
                    }) : (null !== o && (o = JSON.parse(o)), this.getCall(e).dispatchEvent({
                        name: "InfoReceived",
                        call: this.getCall(e),
                        mimeType: t + "/" + n,
                        body: i,
                        headers: o
                    }));
                }.bind(this), window.VIToneScriptPlaybackStop = function() {
                    this.dispatchEvent({
                        name: "PlaybackFinished"
                    });
                }.bind(this), window.VITransferComplete = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "TransferComplete",
                        call: this.getCall(e)
                    });
                }.bind(this), window.VITransferFailed = function(e) {
                    this.getCall(e).dispatchEvent({
                        name: "TransferFailed",
                        call: this.getCall(e)
                    });
                }.bind(this), window.VIPacketLossInfo = function(e) {
                    this.dispatchEvent({
                        name: "NetStatsReceived",
                        stats: {
                            packetLoss: e
                        }
                    });
                }.bind(this), window.VIHandleRoster = function(e, t) {
                    this.dispatchEvent({
                        name: "RosterReceived",
                        id: e,
                        roster: JSON.parse(t)
                    });
                }.bind(this), window.VIHandleRosterPresence = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "RosterPresenceUpdate",
                        id: e,
                        resource: t,
                        presence: n,
                        message: i
                    });
                }.bind(this), window.VIHandleMessage = function(e, t, n, i) {
                    if (this.imXSSprotection) {
                        var o = document.createElement("div");
                        o.appendChild(document.createTextNode(n)), n = o.innerHTML;
                    }
                    this.dispatchEvent({
                        name: "MessageReceived",
                        id: e,
                        resource: t,
                        content: n,
                        message_id: i
                    });
                }.bind(this), window.VIHandlePresence = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "PresenceUpdate",
                        id: e,
                        resource: t,
                        presence: n,
                        message: i
                    });
                }.bind(this), window.VIHandleChateState = function(e, t, n) {
                    this.dispatchEvent({
                        name: "ChatStateUpdate",
                        id: e,
                        resource: t,
                        state: n
                    });
                }.bind(this), window.VIHandleMessageEvent = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "MessageStatus",
                        id: e,
                        resource: t,
                        type: n,
                        message_id: i
                    });
                }.bind(this), window.VIHandleRosterItem = function(e, t, n, i, o) {
                    this.dispatchEvent({
                        name: "RosterItemChange",
                        id: e,
                        resource: t,
                        type: n,
                        displayName: o
                    });
                }.bind(this), window.VIHandleSubscription = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "SubscriptionRequest",
                        id: e,
                        resource: t,
                        type: n,
                        message: i
                    });
                }.bind(this), window.VIHandleRemoteFunctionError = function(e, t, n, i) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "RemoteFunctionError",
                        errorData: {
                            method: e,
                            params: JSON.parse(t),
                            code: n,
                            description: i
                        }
                    });
                }.bind(this), window.VIHandleIMError = function(e, t, n) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "Error",
                        errorData: {
                            type: e,
                            code: t,
                            description: n
                        }
                    });
                }.bind(this), window.VIHandleIMRosterError = function(e) {
                    this.dispatchEvent({
                        name: "IMError",
                        errorType: "RosterError",
                        errorData: {
                            code: e
                        }
                    });
                }.bind(this);
            }, this.connectionState = function(e) {
                return "undefined" == typeof e ? i : void (i = e);
            }, this.getCall = function(e) {
                for (var t = 0; t < this.calls.length; t++) if (this.calls[t].call() == e) return this.calls[t];
                return null;
            }, this.removeCall = function(e) {
                for (var t = [], n = 0; n < this.calls.length; n++) this.calls[n].call() != e ? t.push(this.calls[n]) : delete this.calls[n];
                this.calls = t;
            }, this.playProgressTone = function() {
                null !== this.progressToneScript[this.progressToneCountry] && (this.playingNow || this.playToneScript(this.progressToneScript[this.progressToneCountry]), 
                this.playingNow = !0);
            }, this.stopProgressTone = function() {
                this.playingNow && (this.stopPlayback(), this.playingNow = !1);
            }, this.__call = function(t, i, o, s) {
                if ("object" == typeof t) var i = "undefined" == typeof t.video ? !1 : t.video, o = t.customData, s = t.extraHeaders, a = ("undefined" == typeof t.wiredLocal ? !0 : t.wiredLocal, 
                "undefined" == typeof t.wiredRemote ? !0 : t.wiredRemote), t = t.number;
                if ("undefined" != typeof o && ("undefined" == typeof s && (s = {}), s["VI-CallData"] = o), 
                !this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                var r, c;
                return this.RTCsupported && !this.useFlashOnly ? (r = this.zingayaAPI.callTo(t, i, s, {
                    wiredRemote: a
                }), c = new n(r, t, "", s, !0, this.zingayaAPI), this.calls.length > 0 && this.zingayaAPI.setCallActive(r, !1)) : this.useRTCOnly || (s = JSON.stringify(s), 
                r = e.Utils.swfMovie("voximplantSWF").call(t, i, null, s), c = new n(r, t, "", s, !1), 
                this.calls.length > 0 && e.Utils.swfMovie("voximplantSWF").setCallActive(r, !1)), 
                this.calls.push(c), c;
            }, this.__volume = function(e) {
                return "undefined" == typeof e ? o : void (o = e);
            }, this.__cleanup = function() {
                if (this.calls.length > 0) {
                    var e, t = [];
                    for (e in this.calls) t.push(this.calls[e].id()), this.connectionState() && this.calls[e].hangup();
                    for (e in t) this.removeCall(t[e]);
                }
            };
        }, e.Client.prototype = {
            call: function(e, t, n, i) {
                return this.__call(e, t, n, i);
            },
            config: function() {
                return this.config;
            },
            connect: function(t) {
                "boolean" == typeof t && (this.connectivityCheck = t), "undefined" != typeof this.serverIp ? (host = this.serverIp, 
                this.connectTo(host)) : (balancerResult = function(e) {
                    var t = String(e).indexOf(";");
                    -1 == t ? host = e : (this.serversList = e.split(";"), host = this.serversList[0]), 
                    this.connectTo(host);
                }, e.Utils.getServers(balancerResult.bind(this), !1, this));
            },
            connectTo: function(t, n, i) {
                if ("boolean" == typeof i && (this.connectivityCheck = i), this.connectionState()) throw new Error("ALREADY_CONNECTED_TO_VOXIMPLANT");
                this.host = t, this.RTCsupported && !this.useFlashOnly ? this.micRequired && n !== !0 ? (this.videoSupport && this.zingayaAPI.setConstraints(this.videoConstraints, null, null, !1), 
                this.zingayaAPI.requestMedia(this.videoSupport, this.zingayaAPI.onMediaAccessGranted, this.zingayaAPI.onMediaAccessRejected)) : this.zingayaAPI.connectTo(t, "platform", null, null, this.connectivityCheck) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").connect(t, n === !0 ? !1 : this.micRequired, this.micRequired && this.showFlashSettings);
            },
            disconnect: function() {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.__cleanup(), this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.destroy() : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").disconnect();
            },
            init: function(e) {
                this.__init(e);
            },
            setOperatorACDStatus: function(t) {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.setOperatorACDStatus(t) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setOperatorACDStatus(t);
            },
            login: function(t, n, i) {
                if (i = "undefined" != typeof i ? i : {}, i = e.Utils.extend({}, i), !this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.login(t, n, i) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").login(t, n, JSON.stringify(i));
            },
            loginWithCode: function(t, n, i) {
                if (i = "undefined" != typeof i ? i : {}, i = e.Utils.extend({
                    serverPresenceControl: !1
                }, i), !this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.loginStage2(t, n, i) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").loginStage2(t, n, JSON.stringify(i));
            },
            requestOneTimeLoginKey: function(t) {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.loginGenerateOneTimeKey(t) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").requestOneTimeLoginKey(t);
            },
            loginWithOneTimeKey: function(t, n, i) {
                if (i = "undefined" != typeof i ? i : {}, i = e.Utils.extend({
                    serverPresenceControl: !1
                }, i), !this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.loginUsingOneTimeKey(t, n, i) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").loginUsingOneTimeKey(t, n, JSON.stringify(i));
            },
            connected: function() {
                return this.connectionState();
            },
            showLocalVideo: function(t) {
                if ("undefined" == typeof t && (t = !0), this.RTCsupported && !this.useFlashOnly) if (t) if (null === document.getElementById("voximplantlocalvideo")) {
                    var n = document.createElement("video");
                    n.id = "voximplantlocalvideo", n.autoplay = "autoplay", n.muted = "true", document.body.firstChild ? document.body.insertBefore(n, document.body.firstChild) : document.body.appendChild(n), 
                    this.zingayaAPI.setLocalVideoSink(n);
                } else document.getElementById("voximplantlocalvideo").style.display = "block"; else document.getElementById("voximplantlocalvideo").style.display = "none"; else this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").showLocalVideo(t);
            },
            setLocalVideoPosition: function(t, n) {
                if (this.RTCsupported && !this.useFlashOnly) throw new Error("Please use CSS to position '#voximplantlocalvideo' element");
                this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setSelfViewPosition(t, n);
            },
            setLocalVideoSize: function(t, n) {
                if (this.RTCsupported && !this.useFlashOnly) throw new Error("Please use CSS to set size of '#voximplantlocalvideo' element");
                this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setSelfViewSize(t, n);
            },
            setVideoSettings: function(t, n, i, o) {
                if (this.RTCsupported && !this.useFlashOnly) this.zingayaAPI.setConstraints(t, function(e) {
                    null !== document.getElementById("voximplantlocalvideo") && this.zingayaAPI.setLocalVideoSink(document.getElementById("voximplantlocalvideo")), 
                    this.videoConstraints = t, "function" == typeof n && n(e);
                }.bind(this), function(e) {
                    "function" == typeof i && i(e);
                }, !0); else if (!this.useRTCOnly) {
                    "[object Object]" == Object.prototype.toString.call(t) && (t = JSON.stringify(t));
                    try {
                        e.Utils.swfMovie("voximplantSWF").setVideoSettings(t);
                    } catch (s) {
                        "function" == typeof i && i();
                    }
                    "function" == typeof n && n();
                }
            },
            setVideoBandwidth: function(e) {
                this.RTCsupported && !this.useFlashOnly && (this.zingayaAPI.setVideoBandwidth(e), 
                this.zingayaAPI.setDesiredVideoBandwidth(e));
            },
            playToneScript: function(t, n) {
                this.RTCsupported && !this.useFlashOnly ? e.Utils.playToneScript(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").playToneScript(t, n);
            },
            stopPlayback: function() {
                this.RTCsupported && !this.useFlashOnly ? e.Utils.stopPlayback() && this.dispatchEvent({
                    name: "PlaybackFinished"
                }) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").stopPlayback();
            },
            volume: function(t) {
                return "undefined" == typeof t ? this.__volume() : (t > 100 && (t = 100), 0 > t && (t = 0), 
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.setPlaybackVolume(t / 100) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").changeIncomingAudioVolume(t), 
                this.__volume(t), void 0);
            },
            audioSources: function() {
                if (this.RTCsupported && !this.useFlashOnly && !this.deviceEnumAPI) throw new Error("NOT_SUPPORTED: enumerateDevices");
                return this.audioSourcesList;
            },
            videoSources: function() {
                if (this.RTCsupported && !this.useFlashOnly && !this.deviceEnumAPI) throw new Error("NOT_SUPPORTED: enumerateDevices");
                return this.videoSourcesList;
            },
            audioOutputs: function() {
                if (this.RTCsupported && !this.useFlashOnly && !this.deviceEnumAPI) throw new Error("NOT_SUPPORTED: enumerateDevices");
                return this.audioOutputsList;
            },
            useAudioSource: function(t, n, i) {
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.useAudioSource(t, function(e) {
                    "function" == typeof n && n(e);
                }, function(e) {
                    "function" == typeof i && i(e);
                }) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setAudioSource(t);
            },
            useVideoSource: function(t, n, i) {
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.useVideoSource(t, function(e) {
                    null !== document.getElementById("voximplantlocalvideo") && this.zingayaAPI.setLocalVideoSink(document.getElementById("voximplantlocalvideo")), 
                    "function" == typeof n && n(e);
                }.bind(this), function(e) {
                    "function" == typeof i && i(e);
                }) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setVideoSource(t);
            },
            attachRecordingDevice: function(e, t) {
                !this.RTCsupported || this.useFlashOnly || this.micRequired || this.zingayaAPI.requestMedia(this.videoSupport, function(t) {
                    "function" == typeof e && e(t);
                }, function(e) {
                    "function" == typeof t && t(e);
                });
            },
            detachRecordingDevice: function() {
                !this.RTCsupported || this.useFlashOnly || this.micRequired || this.zingayaAPI.stopLocalStream();
            },
            showFlashSettingsPanel: function(t) {
                "undefined" == typeof t && (t = "default"), this.RTCsupported && !this.useFlashOnly || this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").showFlashSettings(t);
            },
            setCallActive: function(t, n) {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.setCallActive(t.call(), n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setCallActive(t.call(), n);
            },
            sendVideo: function(t) {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                "undefined" == typeof t && (t = !0), this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendVideo(t) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").sendVideo(t);
            },
            isRTCsupported: function() {
                return this.RTCsupported;
            },
            transferCall: function(t, n) {
                if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
                this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.transferCall(t.call(), n.call()) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").transferCall(t.call(), n.call());
            },
            setSwfColor: function(t) {
                this.RTCsupported && !this.useFlashOnly || this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setStageColor(t);
            },
            setCodecPayload: function(t) {
                this.RTCsupported && !this.useFlashOnly || this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").setCodecPayload(t);
            },
            startScreenSharing: function() {
                this.RTCsupported && !this.useFlashOnly && this.zingayaAPI.shareScreen();
            }
        }, e.Client.prototype.addEventListener = function(e, t) {
            "undefined" == typeof this.eventListeners[e] && (this.eventListeners[e] = []), this.eventListeners[e].push(t);
        }, e.Client.prototype.removeEventListener = function(e, t) {
            if ("undefined" != typeof this.eventListeners[e]) for (var n = 0; n < this.eventListeners[e].length; n++) if (this.eventListeners[e][n] == t) {
                this.eventListeners[e].splice(n, 1);
                break;
            }
        }, e.Client.prototype.dispatchEvent = e.Call.prototype.dispatchEvent = function(e) {
            var t = e.name;
            if ("undefined" != typeof this.eventListeners[t]) for (var n = 0; n < this.eventListeners[t].length; n++) "function" == typeof this.eventListeners[t][n] && this.eventListeners[t][n](e);
        };
    }(i), function(e, t) {
        e.Client.prototype.addRosterItem = function(t, n, i, o) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            "undefined" == typeof i && (i = ""), this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.addRoster(t, n, i, o) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").addRosterItem(t, n, i);
        }, e.Client.prototype.removeRosterItem = function(t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.removeRoster(t) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").removeRosterItem(t);
        }, e.Client.prototype.renameRosterItem = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.renameRosterItem(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").renameRosterItem(t, n);
        }, e.Client.prototype.addRosterItemGroup = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.addRosterItemGroup(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").addRosterItemGroup(t, n);
        }, e.Client.prototype.removeRosterItemGroup = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.delRosterItemGroup(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").delRosterItemGroup(t, n);
        }, e.Client.prototype.moveRosterItemGroup = function(t, n, i) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.moveRosterItemGroup(t, n, i) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").moveRosterItemGroup(t, n, i);
        }, e.Client.prototype.acceptSubscription = function(e) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly && this.zingayaAPI.replySubscriptionRequest(e, !0);
        }, e.Client.prototype.rejectSubscription = function(e) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly && this.zingayaAPI.replySubscriptionRequest(e, !1);
        }, e.Client.prototype.sendInstantMessage = function(t, n) {
            var i = e.Utils.generateUUID();
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            return this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendTextMessage(t, n, i) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").sendInstantMessage(t, n, i), 
            i;
        }, e.Client.prototype.editInstantMessage = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.editTextMessage(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.removeInstantMessage = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.removeTextMessage(e, t) : !this.useRTCOnly;
        }, e.Client.prototype.setChatState = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendChatState(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").sendChatState(t, n);
        }, e.Client.prototype.setMessageStatus = function(t, n, i) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            if ("string" == typeof i) i = [ i ]; else if (!Array.isArray(i)) throw new Error("message_id should be string or array");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.raiseMessageEvent(t, n, JSON.stringify(i)) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").raiseMessageEvent(t, n, JSON.stringify(i));
        }, e.Client.prototype.setPresenceStatus = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendStatus(t, n) : this.useRTCOnly || e.Utils.swfMovie("voximplantSWF").sendStatus(t, n);
        }, e.Client.prototype.createChatRoom = function(t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            var i = e.Utils.generateUUID();
            return this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.joinMUC(i, t, n) : !this.useRTCOnly, 
            i;
        }, e.Client.prototype.joinChatRoom = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.joinMUC(e, t) : !this.useRTCOnly;
        }, e.Client.prototype.acceptChatRoomInvite = e.Client.prototype.joinChatRoom, e.Client.prototype.leaveChatRoom = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.leaveMUC(e, t) : !this.useRTCOnly;
        }, e.Client.prototype.sendChatRoomMessage = function(t, n) {
            var i = e.Utils.generateUUID();
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            return this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendMUCMessage(t, n, i) : !this.useRTCOnly, 
            i;
        }, e.Client.prototype.editChatRoomMessage = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.editMUCMessage(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.removeChatRoomMessage = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.removeMUCMessage(e, t) : !this.useRTCOnly;
        }, e.Client.prototype.inviteToChatRoom = function(e, t, n, i) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.inviteMUC(e, t, n, i) : !this.useRTCOnly;
        }, e.Client.prototype.declineChatRoomInvite = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.declineMUCinvitation(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.setChatRoomSubject = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.setSubject(e, t) : !this.useRTCOnly;
        }, e.Client.prototype.removeChatRoomUser = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.kickMUCUser(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.banChatRoomUser = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.banMUCUser(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.unbanChatRoomUser = function(e, t, n) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.unbanMUCUser(e, t, n) : !this.useRTCOnly;
        }, e.Client.prototype.getInstantMessagingHistory = function(e, t, n, i) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.requestHistory(e, t, n, i) : !this.useRTCOnly;
        }, e.Client.prototype.getChatRoomHistory = function(e, t, n, i) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.requestMUCHistory(e, t, n, i) : !this.useRTCOnly;
        }, e.Client.prototype.setChatRoomState = function(e, t) {
            if (!this.connectionState()) throw new Error("NOT_CONNECTED_TO_VOXIMPLANT");
            this.RTCsupported && !this.useFlashOnly ? this.zingayaAPI.sendMUCChatState(e, t) : !this.useRTCOnly;
        };
    }(i), Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), n = this, i = function() {}, o = function() {
            return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)));
        };
        return i.prototype = this.prototype, o.prototype = new i(), o;
    }), !window.JSON) throw new Error("Unsupported browser");
    !function(e, n) {
        e.Utils = {
            source: null,
            extend: function(e) {
                var t = {}, n = function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                };
                n(arguments[0]);
                for (var i = 1; i < arguments.length; i++) {
                    var o = arguments[i];
                    n(o);
                }
                return t;
            },
            swfMovie: function(e) {
                return -1 != navigator.appName.indexOf("Microsoft") ? window[e] : document[e];
            },
            stringifyExtraHeaders: function(e) {
                return e = "[object Object]" == Object.prototype.toString.call(e) ? JSON.stringify(e) : null;
            },
            cadScript: function(e) {
                var t = e.split(";");
                return t.map(function(e) {
                    if (0 !== e.length) {
                        var t = e.match(/\([0-9\/\.,\*\+]*\)$/), n = e.substring(0, t.index), i = t.pop();
                        if (t.length) throw new Error("cadence script should be of the form `%f(%f/%f[,%f/%f])`");
                        if (n = "*" === n ? 1 / 0 : parseFloat(n), isNaN(n)) throw new Error("cadence length should be of the form `%f`");
                        return i = i.slice(1, i.length - 1).split(",").map(function(e) {
                            try {
                                var t = e.split("/");
                                if (t.length > 3) throw new Error();
                                return t = t.map(function(e, t) {
                                    if (2 === t) {
                                        var n = e.split("+").map(function(e) {
                                            var t = parseInt(e, 10);
                                            if (isNaN(t)) throw new Error();
                                            return t - 1;
                                        });
                                        return n;
                                    }
                                    var i;
                                    if ("*" == e && (i = 1 / 0), i = i ? i : parseFloat(e, 10), isNaN(i)) throw new Error();
                                    return i;
                                }), {
                                    on: t[0],
                                    off: t[1],
                                    frequencies: t[2]
                                };
                            } catch (n) {
                                throw new Error("cadence segments should be of the form `%f/%f[%d[+%d]]`");
                            }
                        }), {
                            duration: n,
                            sections: i
                        };
                    }
                });
            },
            freqScript: function(e) {
                var t = e.split(",");
                return t.map(function(e) {
                    try {
                        var t = e.split("@"), n = parseInt(t.shift()), i = parseFloat(t.shift());
                        if (t.length) throw Error();
                        return {
                            frequency: n,
                            decibels: i
                        };
                    } catch (o) {
                        throw new Error("freqScript pairs are expected to be of the form `%d@%f[,%d@%f]`");
                    }
                });
            },
            toneScript: function(t) {
                var n = t.split(";"), i = e.Utils.freqScript(n.shift()), o = e.Utils.cadScript(n.join(";"));
                return {
                    frequencies: i,
                    cadences: o
                };
            },
            playToneScript: function(n, i) {
                if ("undefined" != typeof window.AudioContext || "undefined" != typeof window.webkitAudioContext) {
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    var o = new AudioContext(), s = e.Utils.toneScript(n), a = [], r = 0;
                    processCadence = function(e) {
                        r += e.duration != 1 / 0 ? e.duration : 20;
                        for (var t = 0; t < e.sections.length; t++) processSection(e.sections[t], e.duration);
                    }, processSection = function(e, n) {
                        if (n != 1 / 0 ? t = n : t = n = 20, 0 !== e.off && e.off != 1 / 0) for (;t > 0; ) addSound(e.frequencies, e.on), 
                        t -= e.on, addSilence(e.off), t -= e.off, t = parseInt(10 * t) / 10; else addSound(e.frequencies, n);
                    }, addSilence = function(e) {
                        for (var t = 0; t < o.sampleRate * e; t++) a.push(0);
                    }, addSound = function(e, t) {
                        for (var n = 0; n < o.sampleRate * t; n++) {
                            for (var i = 0, r = 0; r < e.length; r++) i += Math.pow(10, s.frequencies[e[r]].decibels / 20) * Math.sin((a.length + n) * (3.14159265359 / o.sampleRate) * s.frequencies[e[r]].frequency), 
                            10 > n && (i *= n / 10), n > o.sampleRate * t - 10 && (i *= (o.sampleRate * t - n) / 10);
                            a.push(i);
                        }
                    }, this.source = o.createBufferSource();
                    for (var c = 0; c < s.cadences.length; c++) s.cadences[c].duration == 1 / 0 && (this.source.loop = !0), 
                    processCadence(s.cadences[c]);
                    this.source.connect(o.destination), sndBuffer = o.createBuffer(1, r * o.sampleRate, o.sampleRate), 
                    bufferData = sndBuffer.getChannelData(0);
                    for (var l = 0; l < r * o.sampleRate; l++) bufferData[l] = a[l];
                    a = null, this.source.buffer = sndBuffer, i === !0 && (this.source.loop = !0), this.source.start(0);
                }
            },
            stopPlayback: function() {
                return null !== this.source ? (this.source.stop(0), this.source = null, !0) : !1;
            },
            sendRequest: function(e, t, n, i) {
                var o = !1, s = function() {
                    for (var e = [ function() {
                        return new XDomainRequest();
                    }, function() {
                        return new XMLHttpRequest();
                    }, function() {
                        return new ActiveXObject("Msxml2.XMLHTTP");
                    }, function() {
                        return new ActiveXObject("Msxml3.XMLHTTP");
                    }, function() {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } ], t = !1, n = 0; n < e.length; n++) {
                        try {
                            t = e[n](), 0 === n && (o = !0);
                        } catch (i) {
                            continue;
                        }
                        break;
                    }
                    return t;
                }, a = s();
                if (a) {
                    var r = i ? "POST" : "GET";
                    if (o) a.onerror = function() {
                        n(a);
                    }, a.ontimeout = function() {
                        n(a);
                    }, a.onload = function() {
                        t(a);
                    }, a.open(r, e), a.timeout = 5e3, a.send(); else {
                        if (a.open(r, e, !0), i && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
                        a.onreadystatechange = function() {
                            return 4 == a.readyState ? 200 != a.status && 304 != a.status ? void n(a) : void t(a) : void 0;
                        }, 4 == a.readyState) return;
                        a.send(i);
                    }
                }
            },
            getServers: function(t, n, i) {
                function o(o) {
                    null !== o ? t(o) : n !== !0 ? e.Utils.getServers(t, !0, i) : i.dispatchEvent({
                        name: "ConnectionFailed",
                        message: "VoxImplant Cloud is unavailable"
                    });
                }
                var s = "https:" == document.location.protocol ? "https://" : "http://";
                n === !0 ? balancer_url = s + "balancer2.voximplant.com/getNearestHost" : balancer_url = s + "balancer.voximplant.com/getNearestHost", 
                e.Utils.sendRequest(balancer_url, function(e) {
                    o(e.responseText);
                }, function(e) {
                    o(null);
                });
            },
            generateUUID: function() {
                var t = e.Utils._gri, n = e.Utils._ha;
                return n(t(32), 8) + "-" + n(t(16), 4) + "-" + n(16384 | t(12), 4) + "-" + n(32768 | t(14), 4) + "-" + n(t(48), 12);
            },
            _gri: function(e) {
                return 0 > e ? NaN : 30 >= e ? 0 | Math.random() * (1 << e) : 53 >= e ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << e - 30)) * (1 << 30) : NaN;
            },
            _ha: function(e, t) {
                for (var n = e.toString(16), i = t - n.length, o = "0"; i > 0; i >>>= 1, o += o) 1 & i && (n = o + n);
                return n;
            },
            filterXSS: function(e) {
                var t = document.createElement("div");
                return t.appendChild(document.createTextNode(e)), e = t.innerHTML;
            }
        }, e.getInstance = function() {
            return e._clientInstance;
        }, e.version = e.Client.prototype.version = "3.6.321", e._clientInstance || (e._clientInstance = new e.Client(), 
        delete e.Client);
    }(i), "undefined" != typeof exports ? (exports["default"] = exports.VoxImplant = i, 
    "undefined" != typeof module && module.exports && (exports = module.exports = exports["default"])) : n.VoxImplant = i;
}).call(this);
