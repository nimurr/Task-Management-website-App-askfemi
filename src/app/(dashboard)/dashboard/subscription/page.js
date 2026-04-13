'use client';
import { useCancelSubscriptionMutation, useGetMySubscriptionHistoryQuery } from "@/redux/fetures/subscription/subscription";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d.getTime()) || d.getFullYear() < 2000) return "—";
    return d.toLocaleDateString("en-GB").replace(/\//g, "-");
};

const StatusBadge = ({ status }) => {
    const styles = {
        active: "text-green-600 bg-green-100",
        processing: "text-yellow-600 bg-yellow-100",
        cancelled: "text-red-600 bg-red-100",
        expired: "text-gray-500 bg-gray-100",
    };
    return (
        <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${styles[status] || "text-gray-500 bg-gray-100"}`}>
            {status}
        </span>
    );
};

const BILLING_CYCLE_LABEL = {
    0: "One-time",
    1: "Monthly",
    2: "Quarterly",
    3: "Yearly",
};

const Page = () => {
    const { data, isLoading } = useGetMySubscriptionHistoryQuery();
    const [cancelSubs, { isLoading: isCancelling }] = useCancelSubscriptionMutation();

    const subscriptions = data?.data?.attributes || [];
    const [expandedCard, setExpandedCard] = useState(false);
    const [cancelError, setCancelError] = useState(null);
    const [cancelSuccess, setCancelSuccess] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const activeSubscription =
        subscriptions.find((s) => s.status === "active") ||
        subscriptions.find((s) => s.status === "processing") ||
        subscriptions[subscriptions.length - 1];

    const handleCancelSub = async () => {
        setCancelError(null);
        setCancelSuccess(false);
        try {
            const res = await cancelSubs(activeSubscription?._userSubscriptionId).unwrap();
            setCancelSuccess(true);
            setShowConfirm(false);
        } catch (err) {
            setCancelError(err?.data?.message || "Failed to cancel subscription. Please try again.");
            setShowConfirm(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Choose Your Plan</h1>
                        <p className="text-sm text-gray-500">
                            Select the perfect plan for your family's needs.
                        </p>
                    </div>
                    <div className="text-sm text-gray-500">
                        Dashboard <span className="mx-2">›</span>
                        <span className="text-blue-500">Subscription</span>
                    </div>
                </div>

                {/* Subscription History Table */}
                <div className="bg-white rounded-lg shadow-sm mb-8 overflow-x-auto">
                    {isLoading ? (
                        <p className="p-6 text-sm text-gray-400">Loading subscriptions...</p>
                    ) : subscriptions.length === 0 ? (
                        <p className="p-6 text-sm text-gray-400">No subscription history found.</p>
                    ) : (
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr className="text-left">
                                    <th className="p-4">User Subscription ID</th>
                                    <th className="p-4">Billing Cycle</th>
                                    <th className="p-4">Start Date</th>
                                    <th className="p-4">Current Period Date</th>
                                    <th className="p-4">Renewal Date</th>
                                    <th className="p-4">Payment Gateway</th>
                                    <th className="p-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscriptions.map((sub) => (
                                    <tr key={sub._userSubscriptionId} className="border-t hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-mono text-xs text-gray-600">{sub._userSubscriptionId}</td>
                                        <td className="p-4">{BILLING_CYCLE_LABEL[sub.billingCycle] ?? sub.billingCycle}</td>
                                        <td className="p-4">{formatDate(sub.subscriptionStartDate)}</td>
                                        <td className="p-4">{formatDate(sub.currentPeriodStartDate)}</td>
                                        <td className="p-4">{formatDate(sub.renewalDate)}</td>
                                        <td className="p-4 capitalize">{sub.paymentGateway}</td>
                                        <td className="p-4"><StatusBadge status={sub.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Active Plan Card */}
                {activeSubscription && (
                    <div className="flex justify-center">
                        <div className="bg-white w-[380px] border border-blue-400 rounded-lg p-6 shadow-sm">

                            {/* Plan Header */}
                            <div className={`${activeSubscription.status === "active" ? "bg-green-500" : "bg-yellow-500"} text-white p-4 rounded-md mb-6`}>
                                <h3 className="text-lg font-semibold capitalize">
                                    {BILLING_CYCLE_LABEL[activeSubscription.billingCycle] ?? "Subscription"} Plan
                                </h3>
                                <p className="text-xs mt-1">
                                    {activeSubscription.isAutoRenewed
                                        ? "Auto-renewal is enabled for this subscription."
                                        : "Auto-renewal is currently disabled for this subscription."}
                                </p>
                            </div>

                            {/* Dates */}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Started:{" "}
                                        <span className="text-gray-700 font-medium">
                                            {formatDate(activeSubscription.subscriptionStartDate)}
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Renews:{" "}
                                        <span className="text-gray-700 font-medium">
                                            {formatDate(activeSubscription.renewalDate)}
                                        </span>
                                    </p>
                                </div>
                                <StatusBadge status={activeSubscription.status} />
                            </div>

                            {/* Success Message */}
                            {cancelSuccess && (
                                <div className="bg-green-50 border border-green-200 text-green-700 text-xs rounded-md px-3 py-2 mb-4">
                                    Subscription cancelled successfully.
                                </div>
                            )}

                            {/* Error Message */}
                            {cancelError && (
                                <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-md px-3 py-2 mb-4">
                                    {cancelError}
                                </div>
                            )}

                            {/* Cancel Button or Confirm Dialog */}
                            {activeSubscription.status === "active" && !cancelSuccess && (
                                <>
                                    {!showConfirm ? (
                                        <button
                                            onClick={() => {
                                                setCancelError(null);
                                                setShowConfirm(true);
                                            }}
                                            className="w-full bg-red-100 text-red-500 py-2 rounded-md text-sm mb-5 hover:bg-red-200 transition-colors"
                                        >
                                            Cancel Subscription
                                        </button>
                                    ) : (
                                        <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-5">
                                            <p className="text-xs text-red-700 font-medium mb-3">
                                                Are you sure you want to cancel? This action cannot be undone.
                                            </p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleCancelSub}
                                                    disabled={isCancelling}
                                                    className="flex-1 bg-red-500 text-white py-1.5 rounded text-xs font-medium hover:bg-red-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                                >
                                                    {isCancelling ? "Cancelling..." : "Yes, Cancel"}
                                                </button>
                                                <button
                                                    onClick={() => setShowConfirm(false)}
                                                    disabled={isCancelling}
                                                    className="flex-1 bg-gray-100 text-gray-600 py-1.5 rounded text-xs font-medium hover:bg-gray-200 transition-colors disabled:opacity-60"
                                                >
                                                    Keep Plan
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Details Box */}
                            <div className="bg-gray-50 rounded-md p-4 text-sm text-gray-600 space-y-2">
                                <h4 className="font-medium text-gray-800 mb-2">Subscription Details</h4>
                                <p>✔ Gateway: <span className="capitalize font-medium">{activeSubscription.paymentGateway}</span></p>
                                <p>✔ Auto-renew: <span className="font-medium">{activeSubscription.isAutoRenewed ? "Yes" : "No"}</span></p>
                                <p>✔ Platform: <span className="capitalize font-medium">{activeSubscription.purchasePlatform ?? "—"}</span></p>
                                <p>✔ Free Trial: <span className="font-medium">{activeSubscription.isFromFreeTrial ? "Yes" : "No"}</span></p>
                            </div>

                            {/* Expanded Details */}
                            {expandedCard && (
                                <div className="bg-gray-50 rounded-md p-4 mt-3 text-sm text-gray-600 space-y-2 border-t border-gray-200">
                                    <p>
                                        <span className="text-gray-500">Subscription ID:</span>{" "}
                                        <span className="font-mono text-xs break-all">{activeSubscription._userSubscriptionId}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">Stripe Sub ID:</span>{" "}
                                        <span className="font-mono text-xs break-all">{activeSubscription.stripe_subscription_id ?? "—"}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">Transaction ID:</span>{" "}
                                        <span className="font-mono text-xs break-all">{activeSubscription.stripe_transaction_id ?? "—"}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-500">Created At:</span>{" "}
                                        <span className="font-medium">{formatDate(activeSubscription.createdAt)}</span>
                                    </p>
                                </div>
                            )}

                            {/* Toggle View More */}
                            <div
                                onClick={() => setExpandedCard((prev) => !prev)}
                                className="text-center mt-5 text-sm text-gray-600 cursor-pointer hover:text-blue-500 flex items-center justify-center gap-2 font-semibold"
                            >
                                {expandedCard ? "View Less" : "View More"}
                                {expandedCard ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;